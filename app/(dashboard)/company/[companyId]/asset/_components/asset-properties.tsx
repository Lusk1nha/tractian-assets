import { ReceptorIcon } from "@/components/icons/receptor-icon";
import { SensorIcon } from "@/components/icons/sensor-icon";

interface IAssetPropertiesProps {
  sensor?: string;
  receptor?: string;
}

export function AssetProperties(props: Readonly<IAssetPropertiesProps>) {
  const { sensor, receptor } = props;

  return (
    <div className="w-full flex items-center justify-between gap-x-6">
      {sensor && (
        <div className="w-full flex flex-col gap-y-2">
          <div className="font-semibold text-base text-textBolder">Sensor</div>
          <div className="flex items-center gap-x-2 text-base uppercase font-normal text-textMedium">
            <SensorIcon />
            {sensor}
          </div>
        </div>
      )}

      {receptor && (
        <div className="w-full flex flex-col gap-y-2">
          <div className="font-semibold text-base text-textBolder">
            Receptor
          </div>
          <div className="flex items-center gap-x-2 text-base uppercase font-normal text-textMedium">
            <ReceptorIcon />
            {receptor}
          </div>
        </div>
      )}
    </div>
  );
}
