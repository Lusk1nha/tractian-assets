"use client";

import { cn } from "@/lib/utils";
import { SearchIcon } from "../icons/search-icon";

interface ISearchInputProps {
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;

  className?: string;
}

export function SearchInput(props: Readonly<ISearchInputProps>) {
  const { name, placeholder, value, onChange, className } = props;

  return (
    <div className="w-full flex items-center h-[45px] gap-x-3">
      <input
        type="text"
        className={cn(
          "w-full h-full bg-none outline-none border-none text-textBold placeholder:text-textLighter font-normal text-sm",
          className
        )}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        value={value ?? ""}
        placeholder={placeholder}
      />

      <div className="w-8 h-full flex items-center justify-center text-textBolder">
        <SearchIcon className="w-4 h-4" />
      </div>
    </div>
  );
}
