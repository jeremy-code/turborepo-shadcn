"use client";

import { Button } from "@repo/ui/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/ui/popover";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { ComponentPropsWithRef } from "react";
import { navigationMenuTriggerVariants } from "@repo/ui/components/ui/navigation-menu";

/**
 * While <Popover> is not the ideal component for a mobile navigation menu,
 * using the <NavigationMenu> component would require significant changes (e.g.
 * the default behavior is opening the menu on hover, close on `mouseleave`,
 * etc...). In regards to accessibility, <Popover> does initially trap focus
 * inside <PopoverContent>.
 */
export const MobileNav = (props: ComponentPropsWithRef<typeof Popover>) => {
  return (
    <Popover {...props}>
      <nav className="sm:hidden">
        <PopoverTrigger asChild>
          <Button className="group sm:hidden" variant="ghost" size="icon">
            {/* Using display: hidden to indicate aria-hidden with data-attribute */}
            <VisuallyHidden className="group-radix-state-closed:block group-radix-state-open:hidden">
              Open menu
            </VisuallyHidden>
            <VisuallyHidden className="group-radix-state-closed:hidden group-radix-state-open:block">
              Close menu
            </VisuallyHidden>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              className="size-4 fill-none stroke-foreground stroke-2"
            >
              {/**
               * The following paths are lines of width 18px and height 2px
               * in the 24x24 viewBox. The center of top path and bottom
               * path is (12,18) and (12,6), respectively. Hence, after a
               * rotation, to center them they are translated by 6px in the
               * y-direction. The middle path is animated to disappear while
               * shrinking toward the center.
               */}
              <path
                className="origin-center transition-transform [transform-box:fill-box] group-radix-state-open:translate-y-[6px] group-radix-state-open:rotate-45"
                d="M4 6H20"
              />
              <path
                // d:path('...') has a width of 3px because path transitions must have same number of points
                className="transition-[d,opacity] group-radix-state-open:opacity-0 group-radix-state-open:[d:path('M11_12H13')]"
                d="M4 12H20"
              />
              <path
                className="origin-center transition-transform [transform-box:fill-box] group-radix-state-open:translate-y-[-6px] group-radix-state-open:-rotate-45"
                d="M4 18H20"
              />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          onInteractOutside={(e) => e.preventDefault()}
          sideOffset={14}
          collisionPadding={{ left: 4, right: 4 }}
          className="w-radix-popover-content-available sm:hidden"
        >
          <ul className="space-y-0.5">
            <li>
              <a
                href="/test"
                className={navigationMenuTriggerVariants({ variant: "link" })}
              >
                Test
              </a>
            </li>
            <li>
              <a
                href="/test2"
                className={navigationMenuTriggerVariants({ variant: "link" })}
              >
                Test2
              </a>
            </li>
          </ul>
        </PopoverContent>
      </nav>
    </Popover>
  );
};
