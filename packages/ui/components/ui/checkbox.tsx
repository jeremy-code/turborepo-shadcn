import type { ComponentPropsWithRef } from "react";

import { Check, Minus } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

import { cn } from "@repo/ui/utils";

export const Checkbox = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<typeof CheckboxPrimitive.Root>, "children">) => (
  <CheckboxPrimitive.Root
    className={cn(
      "flex size-4 appearance-none items-center justify-center rounded border bg-background shadow outline-none transition-[color,background-color,border-color,box-shadow] hover:bg-muted",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "radix-state-checked:border-primary radix-state-checked:bg-primary radix-state-checked:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="group">
      <Minus className="group-radix-state-indeterminate:block hidden size-3" />
      <Check className="group-radix-state-checked:block hidden size-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);
