import { ModeToggle } from "@/components/site/mode-toggle";

interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-start justify-between pb-2">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl md:tracking-1">
          {heading}
        </h1>
        {text && <p className="text-fgsubtle text-sm">{text}</p>}
      </div>
      {children}
    </div>
  );
}
