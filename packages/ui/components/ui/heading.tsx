import type { HTMLElementType } from "react";
import type { PrimitivePropsWithRef } from "@radix-ui/react-primitive";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type HTMLHeadingElementType = Extract<HTMLElementType, `h${number}`>;

const headingVariants = cva("text-foreground", {
  variants: {
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
      extrablack: "font-[950]",
    },
    size: {
      xs: "text-xs/4",
      sm: "text-sm/5",
      md: "text-base/6",
      lg: "text-lg/[1.6875]",
      xl: "text-xl/[1.875]",
      "2xl": "text-2xl/9",
      "3xl": "text-3xl/[2.8125]",
      "4xl": "text-4xl/[3.375]",
      "5xl": "text-5xl/[4.5]",
      "6xl": "text-6xl/[5.625]",
      "7xl": "text-7xl/[6.75rem]",
      "8xl": "text-8xl/[9rem]",
      "9xl": "text-9xl/[12rem]",
    },
  },
  defaultVariants: { size: "md", fontWeight: "semibold" },
});

export type HeadingProps = {
  as?: HTMLHeadingElementType;
} & PrimitivePropsWithRef<HTMLHeadingElementType> &
  VariantProps<typeof headingVariants>;

export const Heading = ({
  as,
  asChild,
  className,
  size,
  fontWeight,
  ...props
}: HeadingProps) => {
  const Comp = asChild ? Slot : (as ?? "h1");

  return (
    <Comp
      className={twMerge(headingVariants({ className, size, fontWeight }))}
      {...(asChild && {
        role: "heading",
        "aria-level": as === undefined ? 1 : Number(as[1]),
      })}
      {...props}
    />
  );
};
