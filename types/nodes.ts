import { Assets } from "./assets";
import { Locations } from "./locations";

export type NodeEntity = Locations | (Assets & { type: "location" | "asset" });
