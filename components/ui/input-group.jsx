import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

function InputGroup({ className, ...props }) {
  return (
    <div
      data-slot="input-group"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function InputGroupText({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="input-group-text"
      className={cn(
        "bg-muted text-muted-foreground flex h-9 items-center justify-center whitespace-nowrap rounded-md border px-3 text-sm shadow-xs",
        className
      )}
      {...props}
    />
  );
}

export { InputGroup, InputGroupText };
