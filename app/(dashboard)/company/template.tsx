interface ITemplateCompanyProps {
  children: React.ReactNode;
}

export default function TemplateCompany(
  props: Readonly<ITemplateCompanyProps>
) {
  const { children } = props;

  return (
    <section
      id="company-page-template"
      className="bg-foreground w-full h-full flex rounded-lg border border-border px-4 py-[18px] gap-x-2"
    >
      {children}
    </section>
  );
}
