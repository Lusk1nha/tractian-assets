import { AlertIcon } from "@/components/icons/alert-icon";
import { EnergyIcon } from "@/components/icons/energy-icon";
import { Badge } from "@/components/ui/badge";
import { SearchAssets } from "../_components/search-assets";

export default function Home() {
  return (
    <section className="bg-foreground w-full h-full flex rounded-lg border border-border px-4 py-[18px] gap-x-2">
      <div className="max-w-[479px] w-full h-full flex flex-col gap-y-2">
        <div className="min-h-8 flex items-center gap-x-[7px]">
          <h1 className="text-xl text-textBolder font-semibold">Ativos</h1>
          <h4 className="text-sm text-textLight font-normal mt-0.5">
            / Apex Unit
          </h4>
        </div>

        <div className="w-full h-full border border-border rounded-md overflow-hidden">
          <SearchAssets />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-y-2">
        <div className="flex justify-end items-center gap-x-2">
          <Badge icon={<EnergyIcon />}>Sensor de Energia</Badge>
          <Badge icon={<AlertIcon />}>Crítico</Badge>
        </div>

        <div className="w-full h-full border border-border rounded-md"></div>
      </div>
    </section>
  );
}
