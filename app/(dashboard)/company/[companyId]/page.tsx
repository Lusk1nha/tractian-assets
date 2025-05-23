export default function CompanyPage() {
  return (
    <div className="w-full h-full flex flex-col gap-y-2">
      <div className="min-h-8 flex justify-end items-center gap-x-2" />

      <div className="w-full h-full border border-border rounded-md text-primary">
        <div className="w-full h-full flex items-center justify-center pt-[46px] px-4 lg:px-40">
          <h4 className="text-xs md:text-sm font-normal text-textMedium text-center">
            Selecione um ativo para visualizar as informações detalhadas
          </h4>
        </div>
      </div>
    </div>
  );
}
