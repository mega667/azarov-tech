import { CalendarDays, Layers3, ShoppingCart } from "lucide-react";
import { HeroMetric } from "@/lib/data";

const iconByType = {
  calendar: CalendarDays,
  cart: ShoppingCart,
  layers: Layers3,
};

type MetricItemProps = {
  metric: HeroMetric;
};

export function MetricItem({ metric }: MetricItemProps) {
  const Icon = iconByType[metric.icon];

  return (
    <div className="flex items-start gap-1.5">
      <Icon className="mt-0.5 h-3.5 w-3.5 text-app-accent" aria-hidden="true" />
      <div>
        <p className="text-[17px] font-bold text-app-text">{metric.title}</p>
        <p className="text-xs font-medium text-app-muted">{metric.subtitle}</p>
      </div>
    </div>
  );
}
