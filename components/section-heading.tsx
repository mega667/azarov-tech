import { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
};

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-app-accent" aria-hidden="true" />
      <h2 className="text-[30px] font-bold text-app-text md:text-[32px]">{title}</h2>
    </div>
  );
}
