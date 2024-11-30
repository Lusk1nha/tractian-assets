import { Unit } from "@/types/unit";
import { UnitIcon } from "./icons/unit-icon";
import { Logo } from "./logo";
import { SearchButton } from "./ui/button";

export function Navbar() {
  const units: Unit[] = [
    {
      name: "Apex Unit",
      value: "apex",
    },
    {
      name: "Tobias Unit",
      value: "tobias",
    },
    {
      name: "Jaguar Unit",
      value: "jaguar",
    },
  ];

  return (
    <nav className="bg-tertiary text-white h-12 flex items-center justify-between px-4">
      <Logo />

      <div className="flex items-center gap-x-2.5">
        {units.map((unit) => (
          <SearchButton key={unit.value} query="unit" value={unit.value}>
            <UnitIcon />
            {unit.name}
          </SearchButton>
        ))}
      </div>
    </nav>
  );
}
