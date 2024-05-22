"use client";

import { ReactNode, useRef } from "react";
import { useIntersectionCounter } from "../../hooks/useIntersectionCounter";
import { Text, cn } from "@/ui";

type CounterTextProps = {
  targetValue: number;
  step?: number;
  description?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const CounterText = ({
  targetValue,
  step = 1,
  description,
  startAdornment,
  endAdornment,
}: CounterTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  
  const value = useIntersectionCounter({
    containerRef: ref,
    targetValue,
    step,
  });

  return (
    <div
      ref={ref}
      className="group flex flex-col gap-1 items-center justify-center hover:scale-110 duration-300 rounded-2xl p-2 sm:p-4 border-2 border-dashed border-neutral-400/50 hover:border-primary"
    >
      <Text
        className={cn(
          "whitespace-nowrap text-secondary font-medium text-2xl sm:text-4xl",
          value < targetValue && value > 0 && "animate-jump"
        )}
      >
        {startAdornment}
        {value}
        {endAdornment}
      </Text>
      <Text className="text-primary text-lg sm:text-xl text-center">
        {description}
      </Text>
    </div>
  );
};
