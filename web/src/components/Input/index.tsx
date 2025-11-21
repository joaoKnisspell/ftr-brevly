import { cn } from "@/lib/utils";
import { Input as ShadcnInput } from "../ui/input"
import { forwardRef } from "react";

interface InputProps extends React.ComponentProps<typeof ShadcnInput> {
    prefixInput?: boolean
}


export default function Input(props: InputProps) {
    const Component = forwardRef<HTMLInputElement, InputProps>(
      ({ prefixInput, className, ...innerProps }, ref) => {
        const hasError =
          innerProps["aria-invalid"] === true ||
          innerProps["aria-invalid"] === "true";
  
        if (prefixInput) {
          return (
            <div className="w-full flex flex-col gap-2">
              <div
                className={cn(
                  "flex items-center border rounded-md px-4 h-12 transition-all",
                  "focus-within:ring-2",
                  !hasError &&
                    "focus-within:ring-0.5 focus-within:ring-blue-base focus-within:border-blue-base",
                  hasError &&
                    "focus-within:border-red-500 ring-destructive/20 border-destructive"
                )}
              >
                <span className="text-sm text-gray-500 mr-0">brev.ly/</span>
  
                <ShadcnInput
                  ref={ref}
                  {...innerProps}
                  className={cn(
                    "border-0 px-0 shadow-none focus-visible:ring-0",
                    className
                  )}
                />
              </div>
            </div>
          );
        }
  
        return (
          <ShadcnInput
            ref={ref}
            {...innerProps}
            className={className}
          />
        );
      }
    );
  
    Component.displayName = "Input";
  
    return <Component {...props} />;
  }