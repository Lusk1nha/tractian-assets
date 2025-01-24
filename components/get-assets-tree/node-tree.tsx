"use client";

import { TreeNode } from "./render-assets-tree";
import { Locations } from "@/types/locations";
import { Assets } from "@/types/assets";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "../icons/chevron-down-icon";
import { useContext, useState } from "react";
import { LocationIcon } from "../icons/location-icon";
import { BoxIcon } from "../icons/box-icon";
import { TileIcon } from "../icons/tile-icon";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AssetContext } from "../providers/asset-provider";

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

  const [isOpen, setIsOpen] = useState<boolean>(false);

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

        <NodeDetails companyId={companyId} node={node} />
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

interface INodeDetailsProps {
  companyId: string;
  node: TreeNode<
    | Locations
    | (Assets & {
        type: "location" | "asset";
      })
  >;
}
export function NodeDetails(props: Readonly<INodeDetailsProps>) {
  const { companyId, node } = props;

  const nodeId = node.id;
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const { setAsset } = useContext(AssetContext);

  if (node.type === "asset") {
    return (
      <Link
        className="w-full flex items-center"
        href={{
          pathname: `/company/${companyId}/asset/${nodeId}`,
          query: { name },
        }}
        onClick={() => setAsset(node as any)}
        passHref
      >
        <div className="w-[22px] h-[22px] flex items-center justify-center text-primary">
          {getNodeIcon(node)}
        </div>

        <span className="font-normal text-sm text-textBold uppercase px-1">
          {node.data.name}
        </span>
      </Link>
    );
  }

  return (
    <div className="w-full flex items-center">
      <div className="w-[22px] h-[22px] flex items-center justify-center text-primary">
        {getNodeIcon(node)}
      </div>

      <span className="font-normal text-sm text-textBold uppercase px-1">
        {node.data.name}
      </span>
    </div>
  );
}
