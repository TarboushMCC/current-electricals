"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark"; // light = dark text, dark = white text
  className?: string;
}

export function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}
    >
      {label && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className={isDark ? "label-chip-dark" : "label-chip"}>{label}</span>
        </div>
      )}

      <h2 className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
        isDark ? "text-white" : "text-slate-900"
      )}>
        {title}{" "}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </h2>

      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          align === "center" && "max-w-2xl",
          isDark ? "text-blue-100/80" : "text-slate-500"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
