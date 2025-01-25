import { NodeEntity } from "@/types/nodes";

export interface TreeNode<T> {
  type: "location" | "asset";
  id: string;
  data: T;
  children: TreeNode<T>[];
}

export function buildTree(nodes: NodeEntity[]): TreeNode<NodeEntity>[] {
  const nodeMap = new Map<string, TreeNode<NodeEntity>>();

  nodes.forEach((item) => {
    nodeMap.set(item.id, {
      id: item.id,
      data: item,
      children: [],
      type: item.type
    });
  });

  const attachedNodeIds = new Set<string>();

  nodes.forEach((item) => {
    const currentNode = nodeMap.get(item.id);
    if (!currentNode) return;

    if (item.parentId) {
      const parentNode = nodeMap.get(item.parentId);
      if (parentNode) {
        parentNode.children.push(currentNode);
        attachedNodeIds.add(item.id);
      }
    }

    if (item.type === "asset" && item.locationId) {
      const locationNode = nodeMap.get(item.locationId);
      if (locationNode) {
        locationNode.children.push(currentNode);
        attachedNodeIds.add(item.id);
      }
    }
  });

  const roots: TreeNode<NodeEntity>[] = [];
  nodeMap.forEach((node, id) => {
    if (!attachedNodeIds.has(id)) {
      roots.push(node);
    }
  });

  return roots;
}
