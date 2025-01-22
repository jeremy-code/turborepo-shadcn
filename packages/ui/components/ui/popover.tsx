"use client";

import type { ComponentPropsWithRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@repo/ui/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export const PopoverContent = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof PopoverPrimitive.Content>) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={cn(
          "w-72 rounded border bg-popover p-5 text-popover-foreground shadow-md",
          "radix-state-closed:animate-out radix-state-open:animate-in",
          "radix-state-closed:fade-out-0 radix-state-open:fade-in-0",
          "radix-side-bottom:slide-in-from-top-2 radix-side-left:slide-in-from-right-2 radix-side-right:slide-in-from-left-2 radix-side-top:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
};
