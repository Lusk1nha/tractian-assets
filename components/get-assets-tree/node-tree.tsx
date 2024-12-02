"use client";

import Link from "next/link";
import { TreeNode } from "./render-assets-tree";
import { Locations } from "@/types/locations";
import { Assets } from "@/types/assets";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "../icons/chevron-down-icon";
import { useState } from "react";
import { LocationIcon } from "../icons/location-icon";
import { BoxIcon } from "../icons/box-icon";
import { TileIcon } from "../icons/tile-icon";

interface INodeTreeProps {
  companyId: string;

  nodeIndex: number;
  node: TreeNode<
    | Locations
    | (Assets & {
        type: "location" | "asset";
      })
  >;
}

function getNodeIcon(
  node: TreeNode<Locations | (Assets & { type: "location" | "asset" })>
) {
  if (node.type === "location") {
    return <LocationIcon />;
  } else if (node.children.length > 0) {
    return <BoxIcon />;
  } else {
    return <TileIcon />;
  }
}

export function NodeTree(props: Readonly<INodeTreeProps>) {
  const { nodeIndex, companyId, node } = props;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const paddingByIndex = 6 * nodeIndex + "px";

  return (
    <div
      className={cn(
        "flex flex-col py-1",
        nodeIndex === 0 ? "border-none" : "border-l border-border"
      )}
      style={{
        marginLeft: paddingByIndex,
      }}
    >
      <div className="w-full flex items-center">
        <div className="w-6 h-6">
          {node?.children.length > 0 && (
            <button
              type="button"
              className="w-full h-full flex items-center justify-center text-textBold"
              onClick={() => setIsOpen(!isOpen)}
            >
              <ChevronDownIcon
                className={cn(
                  "w-3 h-3 transform transition-transform",
                  isOpen ? "rotate-0" : "-rotate-90"
                )}
              />
            </button>
          )}
        </div>

        <div className="w-[22px] h-[22px] flex items-center justify-center text-primary">
          {getNodeIcon(node)}
        </div>

        <span className="font-normal text-sm text-textBold uppercase px-1">
          {node.data.name}
        </span>
      </div>

      {isOpen &&
        node?.children?.map((child) => (
          <NodeTree
            key={child.id}
            companyId={companyId}
            nodeIndex={nodeIndex + 1}
            node={child}
          />
        ))}
    </div>
  );
}
