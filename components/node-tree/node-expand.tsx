import { memo } from "react";
import { ChevronDownIcon } from "../icons/chevron-down-icon";
import { cn } from "@/lib/utils";

interface INodeExpandProps {
  nodeId: string;

  isOpen: boolean;
  onToggle: (nodeId: string) => void;
}

export const NodeExpand = memo(function NodeExpand(
  props: Readonly<INodeExpandProps>
) {
  const { nodeId, isOpen, onToggle } = props;

  return (
    <div className="min-w-6 h-6">
      <button
        type="button"
        className="w-full h-full flex items-center justify-center text-textBold"
        onClick={() => onToggle(nodeId)}
      >
        <ChevronDownIcon
          className={cn(
            "w-3 h-3 transform transition-transform",
            isOpen ? "rotate-0" : "-rotate-90"
          )}
        />
      </button>
    </div>
  );
});
