// components/ui/Input.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, Props>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-md border px-4 text-sm outline-none",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
export { Input };
