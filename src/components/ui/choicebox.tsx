"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps } from "@radix-ui/react-radio-group";
import { CheckIcon } from "lucide-react";
import type { ComponentProps, HTMLAttributes } from "react";

export type ChoiceboxProps = ComponentProps<typeof RadioGroup>;

export const Choicebox = ({ className, ...props }: ChoiceboxProps) => (
  <RadioGroup className={cn("w-full", className)} {...props} />
);

export type ChoiceboxItemProps = RadioGroupItemProps;

export const ChoiceboxItem = ({ className, children, ...props }: ChoiceboxItemProps) => (
  <RadioGroupItem
    className={cn(
      "text-left",
      '[&[data-state="checked"]]:border-accent',
      '[&[data-state="checked"]]:shadow-[0_0_0_2px_var(--accent-foreground)]',
      '[&[data-state="checked"]]:bg-primary-foreground',
    )}
    asChild
    {...props}
  >
    <Card
      className={cn(
        "flex cursor-pointer flex-row items-start justify-between rounded-lg p-5 shadow-none transition-all",
        className,
      )}
    >
      {children}
    </Card>
  </RadioGroupItem>
);

export type ChoiceboxItemHeaderProps = ComponentProps<typeof CardHeader>;

export const ChoiceboxItemHeader = ({ className, ...props }: ComponentProps<typeof CardHeader>) => (
  <CardHeader className={cn("flex-1 p-0", className)} {...props} />
);

export type ChoiceboxItemTitleProps = ComponentProps<typeof CardTitle>;

export const ChoiceboxItemTitle = ({ className, ...props }: ChoiceboxItemTitleProps) => (
  <CardTitle className={cn("inline-block text-base font-medium", className)} {...props} />
);

export type ChoiceboxItemSubtitleProps = HTMLAttributes<HTMLSpanElement>;

export const ChoiceboxItemSubtitle = ({ className, ...props }: ChoiceboxItemSubtitleProps) => (
  <span className={cn("text-xs font-normal", className)} {...props} />
);

export type ChoiceboxItemDescriptionProps = ComponentProps<typeof CardDescription>;

export const ChoiceboxItemDescription = ({ className, ...props }: ChoiceboxItemDescriptionProps) => (
  <CardDescription className={cn("text-sm", className)} {...props} />
);

export type ChoiceboxItemContentProps = ComponentProps<typeof CardContent>;

export const ChoiceboxItemContent = ({ className, ...props }: ChoiceboxItemContentProps) => (
  <CardContent
    className={cn(
      "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 flex aspect-square size-5 shrink-0 items-center justify-center rounded-full border p-0 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
);

export type ChoiceboxItemIndicatorProps = ComponentProps<typeof RadioGroupIndicator>;

export const ChoiceboxItemIndicator = ({ className, ...props }: ChoiceboxItemIndicatorProps) => (
  <RadioGroupIndicator asChild {...props}>
    <div className="bg-accent grid place-items-center rounded-full p-[2px]">
      <CheckIcon className={cn("text-card size-4", className)} />
    </div>
  </RadioGroupIndicator>
);
