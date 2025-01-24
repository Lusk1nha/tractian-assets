import { cn } from "@/lib/utils";

interface IBadgeProps {
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  title?: string;

  isActive?: boolean;
}

export function Badge(props: Readonly<IBadgeProps>) {
  const { title, className, icon, children, isActive } = props;

  return (
    <div
      className={cn(
        "items-center flex border h-8 rounded-md px-4 text-sm font-medium  gap-x-1.5 transition-colors cursor-default select-none",
        isActive
          ? "bg-primary text-white border-primary"
          : "text-textLight border-border",
        className
      )}
      title={title}
    >
      {icon && (
        <div className={cn("text-primary", isActive && "text-white")}>
          {icon}
        </div>
      )}
      <span className="hidden md:block">{children}</span>
    </div>
  );
}
