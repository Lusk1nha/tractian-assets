"use client";

import { Assets } from "@/types/assets";
import { createContext, useState } from "react";

interface IAssetContext {
  asset: Assets | null;
  setAsset: (asset: Assets) => void;
}

export const AssetContext = createContext<IAssetContext>({
  asset: null,
  setAsset: () => {}
});

interface IAssetProviderProps {
  children: React.ReactNode;
}

export function AssetProvider(props: Readonly<IAssetProviderProps>) {
  const [asset, setAsset] = useState<Assets | null>(null);

  return (
    <AssetContext.Provider value={{ asset, setAsset }}>
      {props.children}
    </AssetContext.Provider>
  );
}
