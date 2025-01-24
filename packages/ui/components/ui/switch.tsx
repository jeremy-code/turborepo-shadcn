"use client";

import type { ComponentPropsWithRef } from "react";

import { Slottable } from "@radix-ui/react-slot";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import type { ClassValue } from "class-variance-authority/types";
import { twMerge } from "tailwind-merge";

type SwitchVariants = {
  size: Record<"default" | "sm" | "lg", ClassValue>;
};

export const switchRootVariants = cva<SwitchVariants>(
  [
    "inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-[background-color,box-shadow,opacity]",
    "shadow-[0_0_0_1px] shadow-border hover:shadow-gray-300/90 dark:hover:shadow-gray-700/90",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "radix-state-checked:bg-primary radix-state-checked:shadow-primary radix-state-checked:dark:bg-border radix-state-checked:dark:shadow-border",
    "radix-state-unchecked:bg-border radix-state-unchecked:dark:bg-white/5",
  ],
  {
    variants: {
      size: {
        default: "h-6 w-11",
        sm: "h-4 w-8",
        lg: "h-7 w-14",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export const SwitchRoot = ({
  className,
  size,
  ...props
}: ComponentPropsWithRef<typeof SwitchPrimitives.Root> &
  VariantProps<typeof switchRootVariants>) => (
  <SwitchPrimitives.Root
    className={twMerge(switchRootVariants({ className, size }))}
    {...props}
  />
);

export const switchThumbVariants = cva<SwitchVariants>(
  [
    "rounded-[inherit] bg-white transition-transform will-change-transform",
    "radix-state-unchecked:translate-x-0",
  ],
  {
    variants: {
      size: {
        default: "size-5 radix-state-checked:translate-x-5",
        sm: "size-3 radix-state-checked:translate-x-4",
        lg: "size-6 radix-state-checked:translate-x-7",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export const SwitchThumb = ({
  className,
  size,
  ...props
}: ComponentPropsWithRef<typeof SwitchPrimitives.Thumb> &
  VariantProps<typeof switchThumbVariants>) => (
  <SwitchPrimitives.Thumb
    className={twMerge(switchThumbVariants({ className, size }))}
    {...props}
  />
);

export const Switch = ({
  size,
  children,
  ...props
}: ComponentPropsWithRef<typeof SwitchRoot>) => (
  <SwitchRoot size={size} {...props}>
    <Slottable>{children}</Slottable>
    <SwitchThumb size={size} />
  </SwitchRoot>
);
