import type { ComponentPropsWithRef } from "react";
import { cn } from "@repo/ui/utils";

import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

import { ThemeToggle } from "#components/misc/ThemeToggle";

export const Navbar = ({
  className,
  ...props
}: ComponentPropsWithRef<"header">) => {
  return (
    <header className={cn("border-b", className)} {...props}>
      <div
        className={cn(
          "container flex items-center justify-between py-2",
          "h-[3.375rem]", // Equivalent to text-sm and py-3 (or height of <Nav>, 54px)
        )}
      >
        <MobileNav />
        <h1 className="flex-none">App</h1>
        <Nav className="hidden sm:flex" />
        <ThemeToggle />
      </div>
    </header>
  );
};
