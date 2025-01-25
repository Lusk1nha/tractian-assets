import { memo } from "react";

import { LocationIcon } from "../icons/location-icon";
import { TileIcon } from "../icons/tile-icon";
import { BoxIcon } from "../icons/box-icon";
import { NodeEntity } from "@/types/nodes";

interface INodeIconProps {
  type: NodeEntity["type"];
  children: number;
}

export const NodeIcon = memo(function getNodeIcon(
  props: Readonly<INodeIconProps>
) {
  const { type, children } = props;

  if (type === "location") {
    return <LocationIcon />;
  } else if (children > 0) {
    return <BoxIcon />;
  }

  return <TileIcon />;
});
