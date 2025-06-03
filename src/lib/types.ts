export type locale =
  | "af" // Afrikaans
  | "ar" // Arabic
  | "ca" // Catalan
  | "zh" // Chinese
  | "zh-Hans" // Chinese Simplified
  | "zh-TW" // Chinese Traditional
  | "da" // Danish
  | "nl" // Dutch
  | "en" // English
  | "en-us" // English US
  | "fr" // French
  | "de" // German
  | "it" // Italian
  | "ja" // Japanese
  | "ko" // Korean
  | "no" // Norwegian
  | "pl" // Polish
  | "pt" // Portuguese
  | "ru" // Russian
  | "es" // Spanish
  | "sv" // Swedish
  | "tr"; // Turkish

export type SnakeCaseCheckoutQueryParams = {
  app_user_id?: string;
  country_code?: string;
  discount_code?: string;
  discount_id?: string;
  locale?: locale;
  paddle_customer_id?: string;
  postal_code?: string;
  price_id?: string;
  theme?: string;
  transaction_id?: string;
  user_email?: string;
};

type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>;

type KeysToCamelCase<T> = {
  [K in keyof T as CamelCase<string & K>]: T[K] extends object ? KeysToCamelCase<T[K]> : T[K];
};

export type CheckoutQueryParams = KeysToCamelCase<SnakeCaseCheckoutQueryParams>;
