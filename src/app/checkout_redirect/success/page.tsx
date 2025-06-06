"use client";

import { getMobileRedirectUrl } from "@/lib/redirect";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Success() {
  const params = useSearchParams();
  const transactionId = params.get("transaction_id");

  return (
    <div className="grid h-dvh place-items-center px-4 py-12">
      {transactionId && (
        <a href={getMobileRedirectUrl(transactionId)} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Return to app
        </a>
      )}
    </div>
  );
}

export default function CheckoutSuccess() {
  return (
    <Suspense>
      <Success />
    </Suspense>
  );
}
