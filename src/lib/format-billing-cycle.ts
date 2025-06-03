import { CheckoutEventsTimePeriod } from "@paddle/paddle-js";

export function formatBillingCycle(billingCycle: CheckoutEventsTimePeriod | null | undefined): string {
  if (!billingCycle) {
    return "";
  }

  const { frequency, interval } = billingCycle;
  return frequency === 1 ? interval : `${frequency} ${interval}s`;
}
