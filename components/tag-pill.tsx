import { cn } from "@/lib/utils";

type TagPillProps = {
  label: string;
  className?: string;
};

export function TagPill({ label, className }: TagPillProps) {
  return (
    <span
      className={cn(
        "rounded-md border border-app-border bg-app-surface px-2.5 py-1 text-[13px] font-medium text-app-secondary",
        className,
      )}
    >
      {label}
    </span>
  );
}
