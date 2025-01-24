"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICompanyRedirectButtonProps {
  className?: string;
  value: string;
  query: Record<string, string>;
  children: React.ReactNode;
}

export function CompanyRedirectButton(
  props: Readonly<ICompanyRedirectButtonProps>
) {
  const { className, value, query, children } = props;

  const pathname = usePathname();
  const isActive = pathname.includes("/company/" + value);

  return (
    <Link
      href={{
        pathname: "/company/" + value,
        query,
      }}
      className={cn(
        "bg-secondary text-textForeground font-semibold text-xs py-1 flex items-center justify-center gap-x-2 px-2 rounded-sm transition-colors duration-200 ease-in-out",
        isActive ? "bg-primary" : "hover:bg-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}
