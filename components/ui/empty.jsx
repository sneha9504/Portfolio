import * as React from "react";
import { cn } from "@/lib/utils";

function Empty({ className, children, ...props }) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "text-center flex flex-col items-center justify-center py-10 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function EmptyImage({ className, ...props }) {
  return (
    <div
      data-slot="empty-image"
      className={cn("flex items-center justify-center", className)}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }) {
  return (
    <h2
      data-slot="empty-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }) {
  return (
    <p
      data-slot="empty-description"
      className={cn("text-muted-foreground text-sm max-w-sm", className)}
      {...props}
    />
  );
}

function EmptyAction({ className, ...props }) {
  return (
    <div
      data-slot="empty-action"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

export { Empty, EmptyImage, EmptyTitle, EmptyDescription, EmptyAction };
