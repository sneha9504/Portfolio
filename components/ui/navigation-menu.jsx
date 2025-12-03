"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function NavigationMenu({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("relative z-10 flex max-w-max flex-1 items-center", className)}
      {...props}
    />
  );
}

function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "flex items-center justify-center gap-1 rounded-md border bg-background p-1 shadow-xs",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuItem(props) {
  return <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" {...props} />;
}

function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground group flex items-center gap-1 rounded-sm px-4 py-2 text-sm font-medium outline-hidden transition-all hover:bg-muted/50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-px h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "left-0 top-0 w-full rounded-md border bg-popover p-4 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground inline-flex h-10 items-center justify-center rounded-sm px-4 py-2 text-sm font-medium outline-hidden hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-10 flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative -top-[6px] size-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

function NavigationMenuViewport({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot="navigation-menu-viewport"
      className={cn(
        "bg-popover relative mt-1 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border p-4 shadow-md",
        className
      )}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
