import { cn } from "@/lib/utils";
import { Input as ShadcnInput } from "../ui/input"
import { forwardRef } from "react";

interface InputProps extends React.ComponentProps<typeof ShadcnInput> {
    prefixInput?: boolean
}


const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ prefixInput, className, ...innerProps }, ref) => {
    const hasError =
      innerProps["aria-invalid"] === true ||
      innerProps["aria-invalid"] === "true";

    return (
      <div className="w-full flex flex-col gap-2">
        <div
          className={cn(
            "flex items-center h-12 transition-all",

            !prefixInput && "border-none p-0",

            prefixInput &&
              "border rounded-md px-4 focus-within:ring-2",
            prefixInput &&
              !hasError &&
              "focus-within:ring-[0.5px]! focus-within:ring-blue-base focus-within:border-blue-base",
            prefixInput &&
              hasError &&
              "focus-within:border-red-500 ring-destructive/20 border-destructive"
          )}
        >
          {prefixInput && (
            <span className="text-sm text-gray-500 select-none">
              brev.ly/
            </span>
          )}

          <ShadcnInput
            ref={ref}
            {...innerProps}
            className={cn(
              prefixInput && "border-0 px-0 shadow-none focus-visible:ring-0",
              !prefixInput && "w-full",
              
              !prefixInput && !hasError && 'focus-within:ring-[0.5px]!  focus-within:ring-blue-base! focus-within:border-blue-base!',
              className
            )}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;