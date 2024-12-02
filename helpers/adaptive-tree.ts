type Tree<T> = {
  [key: string]: T & {
    nodes: T[];
  };
};

type Item = {
  id: string;
  parentId?: string;
};

function getInitialTree<T extends Item>(items: T[]) {
  return items.filter((item) => !item.parentId);
}

function generateTree<T extends Item>(items: T[], item: T): Tree<T> {
  if (!items.length) return {};

  const currentNode = item;

  const nodes = items.filter((i) => i.parentId === currentNode.id);

  if (!nodes.length) {
    return { [currentNode.id]: { ...currentNode, nodes: [] } };
  }

  const tree = nodes.reduce((acc, node) => {
    const children = generateTree(items, node);
    return { ...acc, ...children };
  }, {});

  return { [currentNode.id]: { ...currentNode, nodes: Object.values(tree) } };
}

export function createTree<T extends Item>(items: T[]): Tree<T> {
  const initial = getInitialTree(items);

  const tree = initial.reduce((acc, item) => {
    const children = generateTree(items, item);
    return { ...acc, ...children };
  }, {});

  return tree;
}
