"use client";

import { cn } from "@/lib/utils";
import { SearchIcon } from "../icons/search-icon";

import { useDebouncedCallback } from "use-debounce";
import { memo, useCallback, useState } from "react";
import { X } from "lucide-react";

interface ISearchInputProps {
  name: string;
  placeholder?: string;
  onChange: (value: string) => void;

  value?: string;
  className?: string;
}

const DEBOUNCE_DELAY = 500;

export const SearchInput = memo(function SearchInput(
  props: Readonly<ISearchInputProps>
) {
  const { name, placeholder, onChange, className } = props;

  const [value, setValue] = useState<string>(props.value ?? "");

  const onDebounce = useDebouncedCallback((value) => {
    onChange(value);
  }, DEBOUNCE_DELAY);

  const onEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onChange(value);
      }
    },
    [value, onChange]
  );

  return (
    <div className="w-full flex items-center h-[45px] gap-x-3">
      <input
        type="text"
        className={cn(
          "w-full h-full bg-none outline-none border-none text-textBold placeholder:text-textLighter font-normal text-sm",
          className
        )}
        name={name}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onDebounce(e.target.value);
        }}
        onKeyDown={onEnter}
        placeholder={placeholder}
      />

      <div className="flex items-center gap-x-1">
        {value.length > 0 && (
          <button
            type="button"
            className="w-8 h-full flex items-center justify-center text-textBolder"
            onClick={() => {
              setValue("");
              onChange("");
            }}
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          className="w-8 h-full flex items-center justify-center text-textBolder"
          onClick={() => onChange(value)}
        >
          <SearchIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});
