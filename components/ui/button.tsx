"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface ISearchButtonProps {
  className?: string;
  query: string;
  value: string;
  children: React.ReactNode;
}

export function SearchButton(props: Readonly<ISearchButtonProps>) {
  const { className, query, value, children } = props;

  const searchParams = useSearchParams();
  const currentValue = searchParams.get(query);

  const isActive = currentValue === value;

  return (
    <Link
      href={{
        query: {
          [query]: value,
        },
      }}
      className={cn(
        "bg-secondary text-white font-semibold text-xs py-1 flex items-center justify-center gap-x-2 px-2 rounded-sm transition-colors duration-200 ease-in-out",
        isActive ? "bg-primary" : "hover:bg-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}
