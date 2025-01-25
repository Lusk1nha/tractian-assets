import { CriticalIndicator } from "@/components/indicators/critical-indicator";
import { EnergyIndicator } from "@/components/indicators/energy-indicator";
import { OperationalIndicator } from "@/components/indicators/operational-indicator";
import { cn } from "@/lib/utils";

interface IAssetTitleProps {
  title: string;

  isEnergy?: boolean;
  isOperational?: boolean;
  isCritical?: boolean;

  className?: string;
}

export function AssetTitle(props: Readonly<IAssetTitleProps>) {
  const {
    title,
    className,
    isEnergy = false,
    isOperational = false,
    isCritical = false
  } = props;

  return (
    <div
      className={cn(
        "w-full h-14 flex items-center px-4 py-[14px] gap-x-2",
        className
      )}
    >
      <h2 className="text-textBolder text-lg font-semibold">{title}</h2>
      {isEnergy && <EnergyIndicator />}
      {isOperational && <OperationalIndicator />}
      {isCritical && <CriticalIndicator />}
    </div>
  );
}
