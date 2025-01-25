import { useContext } from "react";
import { AssetContext } from "../providers/asset-provider";
import { useSearchParams } from "next/navigation";
import { TreeNode } from "@/helpers/adaptive-tree";
import { NodeEntity } from "@/types/nodes";
import Link from "next/link";
import { NodeIcon } from "./node-icon";
import { OperationalIndicator } from "../indicators/operational-indicator";
import { CriticalIndicator } from "../indicators/critical-indicator";
import { EnergyIndicator } from "../indicators/energy-indicator";

interface INodeDetailsProps {
  companyId: string;
  node: TreeNode<NodeEntity>;
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
        className="flex items-center"
        href={{
          pathname: `/company/${companyId}/asset/${nodeId}`,
          query: { name }
        }}
        onClick={() => setAsset(node as any)}
        passHref
      >
        <Content node={node} />
      </Link>
    );
  }

  return (
    <div className="flex items-center">
      <Content node={node} />
    </div>
  );
}

interface IContentProps {
  node: TreeNode<NodeEntity>;
}

function Content(props: Readonly<IContentProps>) {
  const { node } = props;

  const nodeType = node.data.type;
  const nodeChildrenLength = node.children.length;

  const isOperational =
    node.data.type === "asset" ? node.data.status === "operating" : false;
  const isCritical =
    node.data.type === "asset" ? node.data.status === "alert" : false;

  const isEnergy =
    node.data.type === "asset" && node.data.sensorType === "energy";

  return (
    <>
      <div className="flex items-center pr-1">
        <div className="w-[22px] h-[22px] flex items-center justify-center text-primary">
          <NodeIcon type={nodeType} children={nodeChildrenLength} />
        </div>

        <span className="font-normal text-sm text-textBold px-1">
          {node.data.name}
        </span>
      </div>

      <div className="flex items-center gap-x-2">
        {isOperational && <OperationalIndicator />}
        {isCritical && <CriticalIndicator />}
        {isEnergy && <EnergyIndicator />}
      </div>
    </>
  );
}
