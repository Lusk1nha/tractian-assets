"use client";

import { GetAssetsTree } from "@/components/get-assets-tree/get-assets-tree";
import { SearchInput } from "@/components/inputs/search-input";
import { Assets } from "@/types/assets";
import { Locations } from "@/types/locations";
import { useState } from "react";

interface ISearchAssetsProps {
  companyId: string;

  assets: Assets[];
  locations: Locations[];

  defaultSearch?: string;
}

export function SearchAssets(props: Readonly<ISearchAssetsProps>) {
  const { companyId, assets, locations, defaultSearch } = props;

  const [search, setSearch] = useState<string>(defaultSearch ?? "");

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
        <GetAssetsTree
          companyId={companyId}
          assets={assets}
          locations={locations}
          search={search}
        />
      </div>
    </div>
  );
}
