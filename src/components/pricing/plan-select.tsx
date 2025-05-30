"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Choicebox,
  ChoiceboxItem,
  ChoiceboxItemContent,
  ChoiceboxItemDescription,
  ChoiceboxItemHeader,
  ChoiceboxItemIndicator,
  ChoiceboxItemSubtitle,
  ChoiceboxItemTitle,
} from "@/components/ui/choicebox";
import Link from "next/link";

const plans = [
  {
    id: "yearly",
    label: "1-year VPN",
    price: "$49.99",
    oldPrice: "$99.99",
    perMonth: "$4.17",
    save: "Save 70%",
    description: "For the first year",
    duration: "year",
  },
  {
    id: "monthly",
    label: "1-month VPN",
    perMonth: "$13.99",
    duration: "month",
  },
];

export function PlanSelect() {
  const [selected, setSelected] = useState("yearly");

  return (
    <div className="mx-auto mt-20 flex h-full min-h-[calc(100vh-11rem)] w-full max-w-2xl flex-col justify-start">
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4">
          <Badge className="gap-2 rounded-full px-2 py-1">
            <ZapIcon className="bg-accent text-background fill-background rounded-full p-0.5" />
            Checkout
          </Badge>
        </div>
        <h1 className="mb-3 text-center text-3xl font-medium tracking-tight md:mb-5 md:text-5xl">
          Select your protection plan
        </h1>
      </div>
      <Choicebox className="space-y-4" value={selected} onValueChange={setSelected}>
        {plans.map((plan) => (
          <ChoiceboxItem value={plan.id} key={plan.id} className="relative mb-0 flex items-center">
            {plan.save && (
              <div className="bg-accent text-card absolute top-1 right-1 rounded-full px-2 py-1 text-xs">
                {plan.save}
                <div className="border-accent-foreground absolute -top-0.5 -left-0.5 h-[calc(100%+0.25rem)] w-[calc(100%+0.25rem)] rounded-full border"></div>
              </div>
            )}
            <ChoiceboxItemContent>
              <ChoiceboxItemIndicator />
            </ChoiceboxItemContent>
            <ChoiceboxItemHeader className="gap-0">
              <ChoiceboxItemTitle>{plan.label}</ChoiceboxItemTitle>
              {plan.price && (
                <ChoiceboxItemSubtitle className="text-foreground flex items-center gap-2 text-base">
                  {plan.price}{" "}
                  {plan.oldPrice && <span className="text-muted-foreground text-xs line-through">{plan.oldPrice}</span>}
                </ChoiceboxItemSubtitle>
              )}
              <ChoiceboxItemDescription>{plan.description}</ChoiceboxItemDescription>
            </ChoiceboxItemHeader>
            <div>
              <p className="text-foreground text-base font-medium">
                {plan.perMonth} <span className="text-muted-foreground text-xs">/month</span>
              </p>
            </div>
          </ChoiceboxItem>
        ))}
      </Choicebox>
      <div className="mt-auto flex flex-col items-center pt-10 md:mt-0">
        <div className="text-muted-foreground mb-4 text-center text-sm md:text-lg">
          Subscription renews every {plans.find((plan) => plan.id === selected)?.duration} until canceled.
        </div>
        <Button className="w-full" size="lg">
          Start your subscription
        </Button>
        <Link href="/terms-and-conditions" className="text-muted-foreground mt-4 w-fit text-sm md:text-lg">
          Subscription and Privacy Info
        </Link>
      </div>
    </div>
  );
}
