import type { ComponentPropsWithRef } from "react";
import { cn } from "@repo/ui/utils";

import { Nav } from "./Nav";

import { ThemeToggle } from "#components/misc/ThemeToggle";

export const Navbar = ({
  className,
  ...props
}: ComponentPropsWithRef<"header">) => {
  return (
    <header className={cn("border-b", className)} {...props}>
      <div className="container flex items-center justify-between py-2">
        <h1>App</h1>
        {/* TODO: Make responsive at small screen sizes */}
        <Nav />
        <ThemeToggle />
      </div>
    </header>
  );
};
