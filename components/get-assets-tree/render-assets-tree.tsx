"use client";

import { getStringToSearch } from "@/lib/string";
import { Assets } from "@/types/assets";
import { Locations } from "@/types/locations";
import { useMemo } from "react";
import { NodeTree } from "./node-tree";

interface IRenderAssetsTreeProps {
  companyId: string;
  search?: string;

  assets: Assets[];
  locations: Locations[];
}

// Define the TreeNode interface
export interface TreeNode<T> {
  id: string;
  data: T;
  children: TreeNode<T>[];
  type: "location" | "asset";
}

export function RenderAssetsTree(props: Readonly<IRenderAssetsTreeProps>) {
  const { companyId, assets, locations, search } = props;

  const nodes = useMemo(() => {
    if (!assets || !locations) return [];

    const allItems = [
      ...locations.map((loc) => ({ ...loc, type: "location" as const })),
      ...assets.map((asset) => ({ ...asset, type: "asset" as const })),
    ];

    if (!search || !search.length) return allItems;

    return allItems.filter((asset) => {
      const searchWithoutAccents = getStringToSearch(search);

      const nameWithoutAccents = getStringToSearch(asset.name);
      return nameWithoutAccents.includes(searchWithoutAccents);
    });
  }, [assets, locations, search]);

  // Usage in your component
  const tree = useMemo(() => {
    // Step 2: Create a map of all nodes by their IDs
    const nodeMap = new Map<
      string,
      TreeNode<Locations | (Assets & { type: "location" | "asset" })>
    >();

    // Initialize nodes for all items
    nodes.forEach((item) => {
      nodeMap.set(item.id, {
        id: item.id,
        data: item,
        children: [],
        type: item.type,
      });
    });

    // Keep track of nodes that have been attached
    const attachedNodeIds = new Set<string>();

    // Step 3: Build the tree
    nodes.forEach((item) => {
      const node = nodeMap.get(item.id)!;

      // Attach to parent based on parentId
      if (item.parentId) {
        const parentNode = nodeMap.get(item.parentId);
        if (parentNode) {
          parentNode.children.push(node);
          attachedNodeIds.add(item.id);
        }
      }

      // For assets, also attach to location based on locationId
      if (item.type === "asset" && item.locationId) {
        const locationNode = nodeMap.get(item.locationId);
        if (locationNode) {
          locationNode.children.push(node);
          attachedNodeIds.add(item.id);
        } else {
          console.warn(
            `Location with ID ${item.locationId} not found for asset ${item.id}`
          );
        }
      }

      // No need to add to roots here; we'll collect unattached nodes later
    });

    // Step 4: Collect roots (nodes that have not been attached to any parent or location)
    const roots: TreeNode<
      Locations | (Assets & { type: "location" | "asset" })
    >[] = [];

    nodeMap.forEach((node, id) => {
      if (!attachedNodeIds.has(id)) {
        roots.push(node);
      }
    });

    return roots;
  }, [nodes]);

  return (
    <div className="w-full h-full flex flex-col py-3">
      {Object.values(tree).map((node) => (
        <NodeTree
          nodeIndex={0}
          key={node.id}
          companyId={companyId}
          node={node}
        />
      ))}
    </div>
  );
}
