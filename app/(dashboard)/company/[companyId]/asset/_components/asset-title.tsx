import { BoltIcon } from "@/components/icons/bolt-icon";
import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";

interface IAssetTitleProps {
  title: string;
  isSensor?: boolean;
  isCritical?: boolean;

  className?: string;
}

export function AssetTitle(props: Readonly<IAssetTitleProps>) {
  const { title, className, isSensor = false, isCritical = false } = props;

  return (
    <div
      className={cn(
        "w-full h-14 flex items-center px-4 py-[14px] gap-x-2",
        className
      )}
    >
      <h2 className="text-textBolder text-lg font-semibold">{title}</h2>
      {isSensor && <SensorIndicator />}
      {isCritical && <CriticalIndicator />}
    </div>
  );
}

function SensorIndicator() {
  return (
    <div className="flex items-center justify-center">
      <BoltIcon className="text-primary" />
    </div>
  );
}

function CriticalIndicator() {
  return <div className="w-2 h-2 bg-danger rounded-full" />;
} 
