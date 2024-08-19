import { cn } from "@repo/ui/utils";
import type { ComponentPropsWithRef } from "react";
import { ThemeToggle } from "@/components/misc/ThemeToggle";

export const Navbar = ({
  className,
  ...props
}: ComponentPropsWithRef<"header">) => {
  return (
    <header className={cn("border-b", className)} {...props}>
      <div className="container flex justify-between py-4">
        <h1>App</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
