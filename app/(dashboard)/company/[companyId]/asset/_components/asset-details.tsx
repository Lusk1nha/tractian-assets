import { Persona } from "@/components/ui/persona";

interface IAssetDetailsProps {
  equipment: string;
  responsible: string;
}

export function AssetDetails(props: Readonly<IAssetDetailsProps>) {
  const { equipment, responsible } = props;

  return (
    <div className="w-full flex flex-col gap-y-6">
      <DetailParagraph label="Tipo de Equipamento">
        <p className="text-base text-textMedium font-light">{equipment}</p>
      </DetailParagraph>
      <hr className="w-full text-border" />

      <DetailParagraph label="Responsáveis">
        <Persona name={responsible} />
      </DetailParagraph>
    </div>
  );
}

interface IDetailParagraphProps {
  label: string;

  children?: React.ReactNode;
}

function DetailParagraph(props: Readonly<IDetailParagraphProps>) {
  const { label, children } = props;

  return (
    <div className="flex flex-col gap-y-2">
      <h4 className="text-base font-semibold text-textBolder">{label}</h4>
      {children}
    </div>
  );
}
