import type { ComponentPropsWithRef } from "react";

import { Separator as SeparatorPrimitive } from "@radix-ui/react-separator";

import { cn } from "@repo/ui/utils";

export const Separator = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof SeparatorPrimitive>) => (
  <SeparatorPrimitive
    className={cn(
      "bg-border radix-orientation-horizontal:h-px radix-orientation-horizontal:w-full radix-orientation-vertical:h-full radix-orientation-vertical:w-px",
      className,
    )}
    {...props}
  />
);
