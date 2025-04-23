
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  subtitleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  subtitleClassName,
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-10 space-y-2",
      {
        "text-left": align === "left",
        "text-center": align === "center",
        "text-right": align === "right",
      },
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className={cn(
          "max-w-3xl text-gray-600",
          {
            "mx-auto": align === "center",
            "ml-auto": align === "right",
          },
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "mt-4 h-1 w-20 bg-river-500",
        {
          "mx-auto": align === "center",
          "ml-auto": align === "right",
        }
      )} />
    </div>
  );
}
