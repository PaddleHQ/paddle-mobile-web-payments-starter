import { CheckoutEventsTimePeriod } from "@paddle/paddle-js";

export function formatTrialPeriod(trialPeriod: CheckoutEventsTimePeriod) {
  const interval = trialPeriod.frequency === 1 ? trialPeriod.interval : `${trialPeriod.interval}s`;

  return `${trialPeriod.frequency} ${interval}`;
}
