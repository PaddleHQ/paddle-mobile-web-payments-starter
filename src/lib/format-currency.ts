export function formatCurrency(amount: number, currency: string) {
  // NB. navigator doesn't look like it has all of these keys. We need to investigate if we need browserLanguage, systemLanguage and userLanguage here
  // @ts-expect-error - navigator is not typed
  const { language, browserLanguage, systemLanguage, userLanguage } = navigator;

  const browserLocale = language || browserLanguage || systemLanguage || userLanguage || "en-US";

  return amount.toLocaleString(browserLocale, {
    style: "currency",
    currency,
  });
}
