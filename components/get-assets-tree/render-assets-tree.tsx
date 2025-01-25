import React, { useMemo, useState, useCallback } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer"; // se quiser se adaptar automaticamente ao espaço
import { buildTree, TreeNode } from "@/helpers/adaptive-tree";
import { NodeEntity } from "@/types/nodes";
import { NodeTree } from "../node-tree/node-tree";

interface FlatItem {
  node: TreeNode<NodeEntity>;
  depth: number;
}

interface IRenderAssetsTreeProps {
  companyId: string;
  nodes: NodeEntity[];
}

export function RenderAssetsTree(props: Readonly<IRenderAssetsTreeProps>) {
  const { companyId, nodes } = props;

  const tree = useMemo(() => buildTree(nodes), [nodes]);

  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleNode = useCallback(
    (nodeId: string) => {
      setExpanded((prev) => {
        const newSet = new Set(prev);

        if (newSet.has(nodeId)) {
          newSet.delete(nodeId);
        } else {
          newSet.add(nodeId);
        }
        return newSet;
      });
    },
    [setExpanded]
  );

  const flatList = useMemo<FlatItem[]>(() => {
    const items: FlatItem[] = [];

    function traverse(node: TreeNode<NodeEntity>, depth: number) {
      items.push({ node, depth });

      if (expanded.has(node.id)) {
        node.children.forEach((child) => {
          traverse(child, depth + 1);
        });
      }
    }

    tree.forEach((root) => traverse(root, 0));
    return items;
  }, [tree, expanded]);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const { node, depth } = flatList[index];

    const isOpen = expanded.has(node.id);

    return (
      <div style={style} className="px-2">
        <div className="pl-2" style={{ paddingLeft: depth * 20 }}>
          <NodeTree
            node={node}
            companyId={companyId}
            isOpen={isOpen}
            onToggle={toggleNode}
          />
        </div>
      </div>
    );
  };

  if (!flatList.length) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center py-3">
        <div className="text-xs md:text-sm text-center text-textMedium">
          Nenhum ativo encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[700px]">
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            itemCount={flatList.length}
            itemSize={32}
            className="scrollbar scrollbar-w-1 !scrollbar-thumb-textBold hover:!scrollbar-thumb-secondary"
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
