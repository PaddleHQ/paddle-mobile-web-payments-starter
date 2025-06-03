"use client";

import type { CheckoutQueryParams } from "@/lib/types";
import { CheckoutOpenLineItem, initializePaddle, type Environments, type Paddle, type Theme } from "@paddle/paddle-js";
import type { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type UsePaddleArgs = {
  checkoutQueryParams: CheckoutQueryParams;
  clientToken: string;
  redirectUrl: string;
  environment: Environments;
};

/**
 * Builds an array of items for the checkout.
 * It splits the priceId by commas and creates an item for each priceId.
 * @param priceId - The priceId to create an item for.
 * @returns An array of items for the checkout.
 */
function buildItems(priceId: string | undefined): CheckoutOpenLineItem[] {
  const allPriceIds = priceId?.split(",");
  return allPriceIds?.map((priceId) => ({ priceId: priceId.trim(), quantity: 1 })) || [];
}

export function usePaddle(args: UsePaddleArgs) {
  const router = useRouter();
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutEventsData | null>(null);

  const [customDataUpdated, setCustomDataUpdated] = useState(false);

  const { checkoutQueryParams, clientToken, environment, redirectUrl } = args;

  const {
    discountCode,
    discountId,
    priceId,
    transactionId,
    userEmail,
    appUserId,
    paddleCustomerId,
    countryCode,
    postalCode,
    theme,
    locale,
  } = checkoutQueryParams;

  const handleCheckoutEvents = (event: CheckoutEventsData) => {
    setCheckoutData(event);
  };

  useEffect(() => {
    if (!paddle?.Initialized && clientToken) {
      initializePaddle({
        token: clientToken,
        environment,
        eventCallback: (event) => {
          if (event.name === "checkout.completed") {
            // Get current URL parameters and merge with new ones
            const currentParams = new URLSearchParams(window.location.search);
            const searchParams = new URLSearchParams({
              ...Object.fromEntries(currentParams),
              redirect_url: redirectUrl,
              transaction_id: event.data?.transaction_id || "",
              customer_email: event.data?.customer?.email || "",
              paddle_customer_id: event.data?.customer?.id || "",
            });
            router.push(`/checkout_redirect/success?${searchParams.toString()}`);
          }

          if (event.data && event.name) {
            handleCheckoutEvents(event.data);
          }
        },
        checkout: {
          settings: {
            theme: theme as Theme,
            variant: "one-page",
            displayMode: "inline",
            frameTarget: "paddle-checkout-frame",
            frameInitialHeight: 450,
            frameStyle: "width: 100%; background-color: transparent; border: none",
            ...(locale && { locale }),
          },
        },
      }).then(async (paddle) => {
        if (paddle && (priceId || transactionId)) {
          setPaddle(paddle);

          paddle.Checkout.open({
            ...(userEmail && {
              customer: {
                email: userEmail,
                ...((countryCode || postalCode) && {
                  address: {
                    ...(countryCode && { countryCode }),
                    ...(postalCode && { postalCode }),
                  },
                }),
              },
            }),

            // override the customer above if we have a paddle customer id
            ...(paddleCustomerId && { customer: { id: paddleCustomerId } }),

            // don't set the custom data here if there is a transaction id
            ...(appUserId && !transactionId && { customData: { app_user_id: appUserId } }),

            ...(transactionId ? { transactionId } : { items: buildItems(priceId) }),

            ...(discountCode ? { discountCode } : discountId ? { discountId } : {}),
          });
        }
      });
    }
  }, [
    appUserId,
    clientToken,
    countryCode,
    paddle?.Initialized,
    paddleCustomerId,
    postalCode,
    priceId,
    redirectUrl,
    router,
    transactionId,
    userEmail,
    locale,
    theme,
    environment,
    discountCode,
    discountId,
  ]);

  // we need to update the custom data with the app user id
  // this can't be called in the checkout.open call because any custom data that exists on the original transaction
  // will be overridden by the passed in custom data
  useEffect(() => {
    // if we have a transaction id, we need to update the custom data with the app user id here
    // also make sure we haven't already updated the custom data
    if (transactionId && !customDataUpdated && paddle?.Initialized && appUserId && checkoutData) {
      const { custom_data } = checkoutData;

      paddle.Checkout.updateCheckout({
        customData: { ...custom_data, app_user_id: appUserId },
      });
      setCustomDataUpdated(true);
    }
  }, [appUserId, checkoutData, customDataUpdated, paddle, transactionId]);

  return {
    checkoutData,
    paddle,
  };
}
