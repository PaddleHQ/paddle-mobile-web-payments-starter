import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - Paddle Web Payments Starter",
  description: "Refund Policy",
};

export default function RefundPolicy() {
  return <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">Refund Policy</h1>;
}
