import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex bg-[#66fcf1] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-non disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-[var(--base-color)] text-slate-100 hover:bg-[var(--base-color-hover)] disabled:bg-black/10 disabled:border-black/10 disabled:text-slate-200",
        destructive:
          "bg-red-900 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "rounded-none bg-black/10 border border-[var(--primary-color)] text-white order-slate-200 hover:text-slate-100 hover:bg-[var(--primary-color)]",
        outlineV2:
          "rounded-none bg-[var(--base-color)] border border-[var(--base-color)] text-slate-100 hover:bg-black/10 disabled:bg-black/10 disabled:border-black/10 disabled:text-slate-200",
        secondary:
          "bg-[var(--primary-color)] text-slate-100 hover:bg-[var(--primary-color-hover)]",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-[var(--primary-color)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
