import React, { forwardRef } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "relative inline-flex items-center justify-between h-8 w-16 px-2 cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "block w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out transform translate-x-0 data-[state=checked]:translate-x-full"
      )}
    />
  </SwitchPrimitives.Root>
));

Switch.displayName = "Switch";

export { Switch };
