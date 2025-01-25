"use client";

import { AlertIcon } from "@/components/icons/alert-icon";
import { EnergyIcon } from "@/components/icons/energy-icon";
import { Badge } from "@/components/ui/badge";
import { AssetTitle } from "./asset-title";
import { Controller, useForm } from "react-hook-form";
import { UploadAvatar } from "@/components/inputs/upload-avatar/upload-avatar";
import { AssetDetails } from "./asset-details";
import { AssetProperties } from "./asset-properties";
import { Assets } from "@/types/assets";

import { faker } from "@faker-js/faker";
import { createArrayWithLength } from "@/lib/mock";
import { useState, useEffect } from "react";

interface AssetForm {
  image: File | undefined;
}

interface IRenderAssetProps {
  asset: Assets;
  image: string;
}

export function RenderAsset(props: Readonly<IRenderAssetProps>) {
  const { asset, image } = props;

  const [isMounted, setIsMounted] = useState(false);

  const owners = createArrayWithLength(
    faker.number.int({
      min: 1,
      max: 4
    }),
    () => faker.person.fullName()
  );

  const equipment = faker.vehicle.vehicle();

  const form = useForm<AssetForm>({
    async defaultValues() {
      const imageContent = await fetch(image).then((res) => res.blob());

      return {
        image: new File([imageContent], "productImage.jpg")
      };
    }
  });

  const { isLoading } = form.formState;

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="flex justify-end items-center gap-x-2">
        <Badge icon={<EnergyIcon />}>Sensor de Energia</Badge>
        <Badge icon={<AlertIcon />}>Crítico</Badge>
      </div>

      <form className="w-full h-full flex flex-col border border-border rounded-md text-primary">
        <AssetTitle
          title={asset?.name}
          className="border-b border-border"
          isEnergy
          isCritical
        />

        <div className="flex flex-col p-6 gap-y-6">
          <div className="w-full flex items-center gap-x-6">
            <div className="min-w-[336px] h-[226px]">
              <Controller
                name="image"
                control={form.control}
                render={({ field: { onChange, value } }) => (
                  <UploadAvatar
                    name="image"
                    onChange={onChange}
                    value={value}
                    disabled={isLoading}
                  />
                )}
              />
            </div>

            <AssetDetails equipment={equipment} responsibles={owners} />
          </div>

          <hr className="w-full bg-appBackground" />

          <AssetProperties sensor={asset.sensorId} receptor={asset.gatewayId} />
        </div>
      </form>
    </>
  );
}
