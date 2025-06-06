"use client";

import { getMobileRedirectUrl } from "@/lib/redirect";
import { useEffect } from "react";

type CheckoutRedirectLayoutProps = {
  children: React.ReactNode;
};

export default function CheckoutRedirectLayout({ children }: CheckoutRedirectLayoutProps) {
  useEffect(() => {
    try {
      const { searchParams } = new URL(window.location.href);

      const transactionId = searchParams.get("txn") || "";
      const redirectUrl = getMobileRedirectUrl(transactionId);

      window.location.href = redirectUrl;
    } catch {}
  }, []);

  return <>{children}</>;
}
