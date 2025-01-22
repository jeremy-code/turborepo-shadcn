import type { PrimitivePropsWithRef } from "@radix-ui/react-primitive";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@repo/ui/utils";

export type InputProps = PrimitivePropsWithRef<"input">;

export const Input = ({ className, asChild, ...props }: InputProps) => {
  const Comp = asChild ? Slot : "input";

  return (
    <Comp
      className={cn(
        "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-[opacity,border-color,color,background-color,box-shadow] dark:bg-white/5",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "hover:border-gray-300/90 dark:hover:border-gray-700/90",
        "placeholder:text-muted-foreground/80",
        "focus-visible:outline-none focus-visible:ring-2",
        "disabled:cursor-not-allowed disabled:bg-muted/50 disabled:opacity-50",
        "invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
};
