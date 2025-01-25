"use client";

import { AlertIcon } from "@/components/icons/alert-icon";
import { EnergyIcon } from "@/components/icons/energy-icon";
import { Badge } from "@/components/ui/badge";

import { AssetTitle } from "../_components/asset-title";

import { AssetDetails } from "../_components/asset-details";
import { AssetProperties } from "../_components/asset-properties";
import { UploadAvatar } from "@/components/inputs/upload-avatar/upload-avatar";
import { Controller, useForm } from "react-hook-form";

interface AssetForm {
  image: File | undefined;
}

export default function Page() {
  const form = useForm<AssetForm>({
    defaultValues: {
      image: undefined
    }
  });

  return (
    <>
      <section className="w-full h-full flex flex-col gap-y-2">
        <div className="flex justify-end items-center gap-x-2">
          <Badge icon={<EnergyIcon />}>Sensor de Energia</Badge>
          <Badge icon={<AlertIcon />}>Crítico</Badge>
        </div>

        <form className="w-full h-full flex flex-col border border-border rounded-md text-primary">
          <AssetTitle
            title="Sensor de Energia"
            className="border-b border-border"
            isSensor
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
                    />
                  )}
                />
              </div>

              <AssetDetails
                equipment="Sensor de Energia"
                responsible="João da Silva"
              />
            </div>

            <hr className="w-full bg-appBackground" />

            <AssetProperties sensor="Sensor de Energia" receptor="Receptor" />
          </div>
        </form>
      </section>
    </>
  );
}
