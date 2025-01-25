import { memo } from "react";

import { NodeEntity } from "@/types/nodes";
import { TreeNode } from "@/helpers/adaptive-tree";
import { NodeDetails } from "./node-details";
import { NodeExpand } from "./node-expand";

interface INodeTreeProps {
  companyId: string;
  node: TreeNode<NodeEntity>;

  isOpen: boolean;
  onToggle: (nodeId: string) => void;
}

export const NodeTree = memo(function NodeTree(
  props: Readonly<INodeTreeProps>
) {
  const { node, companyId, isOpen, onToggle } = props;

  return (
    <div className="h-auto flex flex-col py-1">
      <div className="w-full flex items-center">
        {node?.children.length > 0 ? (
          <NodeExpand nodeId={node.id} isOpen={isOpen} onToggle={onToggle} />
        ) : (
          <div className="min-w-6 h-6" />
        )}

        <NodeDetails companyId={companyId} node={node} />
      </div>
    </div>
  );
});
