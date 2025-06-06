import {
  type Environments,
  type Paddle,
  type PricePreviewParams,
  type PricePreviewResponse,
  initializePaddle,
} from "@paddle/paddle-js";
import { useEffect, useState } from "react";

export type Price = { name: string; total: string; interval?: string };
export type PaddlePrices = Record<string, Price>;

type Plan = {
  priceId: string;
};

const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const environment = process.env.NEXT_PUBLIC_PADDLE_ENV as Environments;

function getLineItems(plans: Plan[]): PricePreviewParams["items"] {
  return plans.map((plan) => ({ priceId: plan.priceId, quantity: 1 }));
}

function getPriceAmounts(prices: PricePreviewResponse) {
  return prices.data.details.lineItems.reduce((acc, item) => {
    acc[item.price.id] = {
      name: item.price.name ?? "",
      total: item.formattedTotals.total,
      interval: item.price.billingCycle?.interval,
    };
    return acc;
  }, {} as PaddlePrices);
}

export function usePaddlePrices(plans: Plan[], country: string): { prices: PaddlePrices; loading: boolean } {
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [prices, setPrices] = useState<PaddlePrices>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!paddle?.Initialized && clientToken) {
      initializePaddle({
        token: clientToken,
        environment,
      }).then(async (paddle) => {
        if (paddle) {
          setPaddle(paddle);

          const paddlePricePreviewRequest: Partial<PricePreviewParams> = {
            items: getLineItems(plans),
            ...(country !== "OTHERS" && { address: { countryCode: country } }),
          };

          setLoading(true);

          paddle?.PricePreview(paddlePricePreviewRequest as PricePreviewParams).then((prices) => {
            setPrices((prevState) => ({ ...prevState, ...getPriceAmounts(prices) }));
            setLoading(false);
          });
        }
      });
    }
  }, [country, paddle, prices, plans]);

  return { prices, loading };
}
