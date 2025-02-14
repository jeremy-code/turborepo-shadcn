"use client";

import type { ComponentPropsWithRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Label as LabelPrimitive } from "radix-ui";
import { twMerge } from "tailwind-merge";

const labelVariants = cva(
  [
    "text-sm/none font-medium",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-80",
  ],
  {
    variants: {
      required: {
        true: "after:ml-px after:text-destructive after:content-['*'/'']",
      },
    },
  },
);

export type LabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

export const Label = ({ className, required, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    className={twMerge(labelVariants({ className, required }))}
    {...props}
  />
);
