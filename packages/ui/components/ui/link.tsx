import type { PrimitivePropsWithRef } from "@radix-ui/react-primitive";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ExternalLink } from "lucide-react";
import { twMerge } from "tailwind-merge";

const linkStyles = cva(
  "inline-flex items-center gap-1 decoration-from-font underline-offset-1 transition-colors [transition-behavior:allow-discrete]",
  {
    variants: {
      color: {
        /**
         * Styling colors based on system colors (LinkText, VisitedText). This
         * passes AA contrast ratio (light: 5.17, Dark: 5.57).
         */
        link: [
          "text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400",
          /**
           * Unfortunately, there is currently a bug in Firefox where there is a
           * flicker when transitioning text colors on visited links.
           *
           * @see {@link https://bugzilla.mozilla.org/show_bug.cgi?id=868975}
           */
          "visited:text-purple-600 visited:hover:text-purple-700 dark:visited:text-purple-500 dark:visited:hover:text-purple-400",
        ],
      },
      underline: {
        true: "underline decoration-[color:hsl(from_currentcolor_h_s_l/50%)] hover:decoration-[color:hsl(from_currentcolor_h_s_l/80%)]",
        false: "no-underline",
        hover:
          "decoration-transparent hover:underline hover:decoration-[color:hsl(from_currentcolor_h_s_l/80%)]",
      },
    },
    /**
     * WCAG standards technically state that links within text should have a
     * non-color visual distinction. While the default variant does not
     * underline for flexibility, it should be set to underline if there is no
     * other easily element to distinguish links within text.
     */
    defaultVariants: { underline: false },
  },
);

export type LinkProps = {
  /**
   * Opens link in new tab and adds an {@link ExternalLink} icon.
   */
  isExternal?: boolean;
} & PrimitivePropsWithRef<"a"> &
  VariantProps<typeof linkStyles>;

export const Link = ({
  asChild,
  className,
  isExternal,
  children,
  color,
  underline,
  ...props
}: LinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={twMerge(linkStyles({ color, className, underline }))}
      // target="_blank" implies rel="noopener": https://caniuse.com/mdn-html_elements_a_implicit_noopener
      {...(isExternal && { target: "_blank" })}
      {...props}
    >
      <Slottable>{children}</Slottable>
      {isExternal && <ExternalLink className="size-[1em] flex-none" />}
    </Comp>
  );
};
