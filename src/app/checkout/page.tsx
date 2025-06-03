import { Checkout } from "@/components/checkout/checkout";
import { CheckoutQueryParams, SnakeCaseCheckoutQueryParams } from "@/lib/types";
import { Environments } from "@paddle/paddle-js";

type Props = {
  searchParams: Promise<SnakeCaseCheckoutQueryParams>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
  const redirectUrl = process.env.NEXT_PUBLIC_APP_REDIRECT_URL;
  const environment = process.env.NEXT_PUBLIC_PADDLE_ENV as Environments;

  if (!clientToken || !redirectUrl || !environment) {
    return <div className="grid place-items-center p-8 text-xl">Missing required environment variables</div>;
  }

  const {
    app_user_id: appUserId,
    country_code: countryCode,
    discount_code: discountCode,
    discount_id: discountId,
    locale,
    paddle_customer_id: paddleCustomerId,
    postal_code: postalCode,
    price_id: urlPriceId,
    theme,
    transaction_id: transactionId,
    user_email: userEmail,
  } = await searchParams;

  const checkoutQueryParams: CheckoutQueryParams = {
    appUserId,
    countryCode,
    discountCode,
    discountId,
    locale,
    paddleCustomerId,
    postalCode,
    priceId: urlPriceId,
    theme,
    transactionId,
    userEmail,
  };

  if (!urlPriceId && !transactionId) {
    return <div className="grid place-items-center p-8 text-xl">Missing price ID</div>;
  }

  return (
    <Checkout
      checkoutQueryParams={checkoutQueryParams}
      environment={environment}
      clientToken={clientToken}
      redirectUrl={redirectUrl}
    />
  );
}
