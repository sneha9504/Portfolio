import * as React from "react";
import { cn } from "@/lib/utils";

function InputOTP({ value = "", length = 6, onChange, className, ...props }) {
  const inputs = React.useRef([]);

  const handleChange = (index, event) => {
    const val = event.target.value.replace(/[^0-9]/g, "");
    const arr = value.split("");

    if (val) {
      arr[index] = val[val.length - 1];
      if (index < length - 1) {
        inputs.current[index + 1]?.focus();
      }
    } else {
      arr[index] = "";
    }

    onChange?.(arr.join(""));
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      data-slot="input-otp"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          maxLength={1}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={cn(
            "h-10 w-10 rounded-md border bg-background text-center text-lg shadow-xs outline-none " +
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          )}
        />
      ))}
    </div>
  );
}

export { InputOTP };
