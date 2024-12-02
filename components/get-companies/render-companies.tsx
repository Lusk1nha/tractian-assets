"use client";

import { Company } from "@/types/companies";
import { SearchButton } from "../ui/button";
import { UnitIcon } from "../icons/unit-icon";
import { use, useMemo } from "react";

interface IRenderCompaniesProps {
  response: Promise<Company[]>;
}

export function RenderCompanies(props: Readonly<IRenderCompaniesProps>) {
  const { response } = props;
  const companies = use(response);

  const sorted = useMemo(() => {
    if (!companies) return [];

    return companies.sort((a, b) => a.name.localeCompare(b.name));
  }, [companies]);

  return (
    <div className="flex items-center gap-x-2.5">
      {sorted.map((unit) => (
        <SearchButton key={unit.id} query="unit" value={unit.id}>
          <UnitIcon />
          <span className="hidden md:block">{unit.name} Unit</span>
        </SearchButton>
      ))}
    </div>
  );
}
