"use client";

import { SearchInput } from "@/components/inputs/search-input";
import { GetAssetsTree } from "@/components/get-assets-tree/get-assets-tree";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchAssets() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>("");

  const unit = searchParams.get("unit") ?? "";

  if (!unit) {
    return null;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full px-3 border-b border-border">
        <SearchInput
          placeholder="Buscar Ativo ou Local"
          name="assets-search"
          value={search}
          onChange={(value) => setSearch(value)}
        />
      </div>

      <div className="w-full h-full">
        <GetAssetsTree companyId={unit} search={search} />
      </div>
    </div>
  );
}
