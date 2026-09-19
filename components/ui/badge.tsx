import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "indigo" | "cyan" | "emerald" | "amber" | "rose";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
        {
          "border-transparent bg-indigo-500/10 text-indigo-400 border-indigo-500/20":
            variant === "default" || variant === "indigo",
          "border-zinc-800 bg-zinc-900 text-zinc-300":
            variant === "secondary",
          "border-zinc-700 text-zinc-300":
            variant === "outline",
          "border-cyan-500/20 bg-cyan-500/10 text-cyan-400":
            variant === "cyan",
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-400":
            variant === "emerald",
          "border-amber-500/20 bg-amber-500/10 text-amber-400":
            variant === "amber",
          "border-rose-500/20 bg-rose-500/10 text-rose-400":
            variant === "rose",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
