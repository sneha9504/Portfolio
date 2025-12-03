import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ className, ...props }) {
  return (
    <nav
      data-slot="pagination"
      className={cn("flex items-center justify-center gap-2", className)}
      {...props}
    />
  );
}

function PaginationList({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-list"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }) {
  return (
    <li
      data-slot="pagination-item"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <button
      data-slot="pagination-previous"
      className={cn(
        "border-input hover:bg-accent hover:text-accent-foreground flex h-9 items-center rounded-md border px-3 text-sm",
        className
      )}
      {...props}
    >
      <ChevronLeft className="mr-2 size-4" />
      Previous
    </button>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <button
      data-slot="pagination-next"
      className={cn(
        "border-input hover:bg-accent hover:text-accent-foreground flex h-9 items-center rounded-md border px-3 text-sm",
        className
      )}
      {...props}
    >
      Next
      <ChevronRight className="ml-2 size-4" />
    </button>
  );
}

function PaginationLink({ className, active, ...props }) {
  return (
    <button
      data-slot="pagination-link"
      aria-current={active ? "page" : undefined}
      className={cn(
        "border-input hover:bg-accent hover:text-accent-foreground flex h-9 w-9 items-center justify-center rounded-md border text-sm",
        active && "bg-accent text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

export {
  Pagination,
  PaginationList,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
};
