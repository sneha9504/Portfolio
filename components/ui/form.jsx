'use client';

import * as React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

function Form({ children, ...props }) {
  const methods = props.form || props;
  return (
    <FormProvider {...methods}>
      <form data-slot="form" {...props}>
        {children}
      </form>
    </FormProvider>
  );
}

function FormField({ name, children }) {
  const { control } = useFormContext();
  return children({ control, name });
}

function FormItem({ className, ...props }) {
  return (
    <div data-slot="form-item" className={cn("space-y-2", className)} {...props} />
  );
}

function FormLabel({ className, ...props }) {
  return (
    <label
      data-slot="form-label"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
}

function FormControl({ ...props }) {
  return <div data-slot="form-control" {...props} />;
}

function FormDescription({ className, ...props }) {
  return (
    <p
      data-slot="form-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function FormMessage({ className, children, ...props }) {
  const body = children
    ? children
    : "Form validation error";

  return (
    <p
      data-slot="form-message"
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  Form,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
  FormField,
  FormControl,
};
