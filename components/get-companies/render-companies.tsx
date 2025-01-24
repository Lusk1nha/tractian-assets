import { Company } from "@/types/companies";
import { CompanyRedirectButton } from "../company-redirect-button";
import { UnitIcon } from "../icons/unit-icon";

interface IRenderCompaniesProps {
  companies: Company[];
}

export function RenderCompanies(props: Readonly<IRenderCompaniesProps>) {
  const { companies } = props;

  return (
    <div className="flex items-center gap-x-2.5">
      {companies.map((unit) => (
        <CompanyRedirectButton
          key={unit.id}
          value={unit.id}
          query={{ companyName: unit.name }}
        >
          <UnitIcon />
          <p className="text-xs flex font-semibold gap-x-1">
            {unit.name} <span className="hidden md:block">Unit</span>
          </p>
        </CompanyRedirectButton>
      ))}
    </div>
  );
}
