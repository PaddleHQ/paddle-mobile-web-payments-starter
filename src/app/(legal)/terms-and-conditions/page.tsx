import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Paddle Web Payments Starter",
  description: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">Terms and Conditions</h1>;
}
