"use client";

import { useSearchParams } from "next/navigation";
import { memo } from "react";

interface ICompanyHeaderHomeProps {
  title: string;
}

export const CompanyHeaderHome = memo(function CompanyHeaderHome(
  props: Readonly<ICompanyHeaderHomeProps>
) {
  const { title } = props;

  const searchParams = useSearchParams();
  const name = searchParams.get("companyName");

  const companyText = name ? name + " Unit" : "Non available";

  return (
    <div className="min-h-8 flex items-center gap-x-[7px]">
      <h1 className="text-xl text-textBolder font-semibold">{title}</h1>
      <h4 className="text-sm text-textLight font-normal mt-0.5">
        / {companyText}
      </h4>
    </div>
  );
});
