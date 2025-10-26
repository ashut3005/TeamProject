import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full h-10 rounded-lg px-4 text-sm font-medium text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500",
        "bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-300/60 dark:border-gray-700/60 shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500 transition-all duration-200 ease-in-out",
        "disabled:opacity-50 disabled:cursor-not-allowed file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "aria-invalid:border-red-500 aria-invalid:ring-red-300/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
