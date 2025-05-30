"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Choicebox,
  ChoiceboxItem,
  ChoiceboxItemContent,
  ChoiceboxItemHeader,
  ChoiceboxItemIndicator,
  ChoiceboxItemSubtitle,
  ChoiceboxItemTitle,
} from "@/components/ui/choicebox";
import { CheckIcon } from "lucide-react";

const plans = [
  {
    id: "annual",
    label: "Annual",
    price: "$49.99",
    oldPrice: "$99.99",
    save: "Save 50%",
    description: "$49.99 first year. Automatically renews at $99.99 per year",
  },
  {
    id: "monthly",
    label: "Monthly",
    price: "$4.99",
    oldPrice: "$9.99",
    description: "$4.99 first month. Automatically renews at $9.99 per month",
  },
];

const features = [
  "Block scam texts with smart AI",
  "Remove your info from sites selling it",
  "Browse online securely with VPN",
  "Monitor your identity with timely alerts",
];

export function PlanSelect() {
  const [selected, setSelected] = useState("annual");

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center">
      <h1 className="mt-8 mb-4 text-center text-3xl font-bold md:text-4xl">Unlock Scam Protection, VPN, and more</h1>
      <ul className="mx-auto mt-4 mb-8 w-full max-w-xs space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-foreground/60 flex items-center text-base">
            <div className="bg-success mr-2 grid place-items-center rounded-full p-0.5">
              <CheckIcon className="size-4 p-0.5 text-white" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      <Choicebox
        className="mb-6 grid w-full grid-cols-2 justify-center gap-4"
        value={selected}
        onValueChange={setSelected}
      >
        {plans.map((plan) => (
          <ChoiceboxItem
            value={plan.id}
            key={plan.id}
            className="bg-card relative flex flex-col items-center rounded-lg px-8 py-6"
          >
            {plan.save && (
              <span className="bg-accent border-accent-foreground absolute -top-4 left-0 rounded-full border-2 px-2 py-1 text-xs font-semibold text-white md:left-1/2 md:-translate-x-1/2">
                {plan.save}
              </span>
            )}
            <ChoiceboxItemHeader className="w-full text-center">
              <ChoiceboxItemTitle>{plan.label}</ChoiceboxItemTitle>
              <ChoiceboxItemSubtitle className="text-base">{plan.price}</ChoiceboxItemSubtitle>
              <span className="text-muted-foreground text-xs line-through">{plan.oldPrice}</span>
            </ChoiceboxItemHeader>
            <ChoiceboxItemContent>
              <ChoiceboxItemIndicator />
            </ChoiceboxItemContent>
          </ChoiceboxItem>
        ))}
      </Choicebox>
      <div className="text-muted-foreground mb-6 text-center text-base">
        {plans.find((p) => p.id === selected)?.description}
      </div>
      <Button className="mb-8 w-full" size="lg">
        Start Free Trial
      </Button>
      <div className="text-muted-foreground flex justify-center gap-8 text-sm underline">
        <a href="#">Restore</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </div>
  );
}
