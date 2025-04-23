
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  iconClassName,
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-white p-6 transition-all hover:shadow-lg",
        className
      )}
    >
      <div className={cn(
        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-river-100 text-river-600 transition-colors",
        "group-hover:bg-river-500 group-hover:text-white",
        iconClassName
      )}>
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-river-500 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}
