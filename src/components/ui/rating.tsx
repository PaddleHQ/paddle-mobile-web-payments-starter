"use client";

import { cn } from "@/lib/utils";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { type LucideProps, StarIcon } from "lucide-react";
import type { KeyboardEvent, MouseEvent, ReactElement, ReactNode } from "react";
import { Children, cloneElement, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type RatingContextValue = {
  value: number;
  readOnly: boolean;
  hoverValue: number | null;
  focusedStar: number | null;
  handleValueChange: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>, value: number) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  setHoverValue: (value: number | null) => void;
  setFocusedStar: (value: number | null) => void;
};

const RatingContext = createContext<RatingContextValue | null>(null);

const useRating = () => {
  const context = useContext(RatingContext);
  if (!context) {
    throw new Error("useRating must be used within a Rating component");
  }
  return context;
};

export type RatingButtonProps = LucideProps & {
  index?: number;
  icon?: ReactElement<LucideProps>;
  halfIcon?: ReactElement<LucideProps>;
};

export const RatingButton = ({
  index: providedIndex,
  size = 20,
  className,
  icon = <StarIcon />,
}: RatingButtonProps) => {
  const { value, readOnly, hoverValue, focusedStar, handleValueChange, handleKeyDown, setHoverValue, setFocusedStar } =
    useRating();

  const index = providedIndex ?? 0;
  const currentValue = hoverValue ?? focusedStar ?? value ?? 0;

  // Determine star state: empty (0), half (0.5), or full (1)
  const starValue = Math.max(0, Math.min(1, currentValue - index));
  const isHalf = starValue > 0 && starValue < 1;
  const isFull = starValue >= 1;

  let tabIndex = -1;

  if (!readOnly) {
    tabIndex = value === index + 1 ? 0 : -1;
  }

  return (
    <button
      type="button"
      onClick={(event) => handleValueChange(event, index + 1)}
      onMouseEnter={() => !readOnly && setHoverValue(index + 1)}
      onKeyDown={handleKeyDown}
      onFocus={() => setFocusedStar(index + 1)}
      onBlur={() => setFocusedStar(null)}
      disabled={readOnly}
      className={cn(
        "focus-visible:ring-ring rounded-full text-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "relative p-px",
        readOnly && "cursor-default",
        className,
      )}
      tabIndex={tabIndex}
    >
      {isHalf ? (
        <>
          {/* Base empty star */}
          {cloneElement(icon, {
            size,
            className: cn(
              "transition-colors duration-200 text-orange-200 stroke-current fill-current",
              !readOnly && "cursor-pointer",
            ),
            "aria-hidden": "true",
          })}
          {/* Half filled star overlay - clipped to show left half */}
          {cloneElement(icon, {
            size,
            className: cn(
              "transition-colors duration-200 fill-current absolute top-px left-px",
              !readOnly && "cursor-pointer",
            ),
            style: { clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" },
            "aria-hidden": "true",
          })}
        </>
      ) : (
        cloneElement(icon, {
          size,
          className: cn("transition-colors duration-200", isFull && "fill-current", !readOnly && "cursor-pointer"),
          "aria-hidden": "true",
        })
      )}
    </button>
  );
};

export type RatingProps = {
  defaultValue?: number;
  value?: number;
  onChange?: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>, value: number) => void;
  onValueChange?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
  children?: ReactNode;
};

export const Rating = ({
  value: controlledValue,
  onValueChange: controlledOnValueChange,
  defaultValue = 0,
  onChange,
  readOnly = false,
  className,
  children,
  ...props
}: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [focusedStar, setFocusedStar] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, onValueChange] = useControllableState({
    defaultProp: defaultValue,
    prop: controlledValue,
    onChange: controlledOnValueChange,
  });

  const handleValueChange = useCallback(
    (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>, newValue: number) => {
      if (!readOnly) {
        onChange?.(event, newValue);
        onValueChange?.(newValue);
      }
    },
    [readOnly, onChange, onValueChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (readOnly) {
        return;
      }

      const total = Children.count(children);
      let newValue = focusedStar !== null ? focusedStar : (value ?? 0);

      switch (event.key) {
        case "ArrowRight":
          if (event.shiftKey || event.metaKey) {
            newValue = total;
          } else {
            newValue = Math.min(total, newValue + 1);
          }
          break;
        case "ArrowLeft":
          if (event.shiftKey || event.metaKey) {
            newValue = 1;
          } else {
            newValue = Math.max(1, newValue - 1);
          }
          break;
        default:
          return;
      }

      event.preventDefault();
      setFocusedStar(newValue);
      handleValueChange(event, newValue);
    },
    [focusedStar, value, children, readOnly, handleValueChange],
  );

  useEffect(() => {
    if (focusedStar !== null && containerRef.current) {
      const buttons = containerRef.current.querySelectorAll("button");
      buttons[focusedStar - 1]?.focus();
    }
  }, [focusedStar]);

  const contextValue: RatingContextValue = {
    value: value ?? 0,
    readOnly,
    hoverValue,
    focusedStar,
    handleValueChange,
    handleKeyDown,
    setHoverValue,
    setFocusedStar,
  };

  return (
    <RatingContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn("inline-flex items-center", className)}
        role="radiogroup"
        aria-label="Rating"
        onMouseLeave={() => setHoverValue(null)}
        {...props}
      >
        {Children.map(children, (child, index) => {
          if (!child) {
            return null;
          }

          return cloneElement(child as ReactElement<RatingButtonProps>, {
            index,
          });
        })}
      </div>
    </RatingContext.Provider>
  );
};
