interface AssetLayoutProps {
  children: React.ReactNode;
}
export default function AssetLayout(props: Readonly<AssetLayoutProps>) {
  const { children } = props;
  return <div className="w-full h-full flex flex-col gap-y-2">{children}</div>;
}
