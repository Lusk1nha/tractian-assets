import Link from "next/link";
import { TractianLogo } from "./icons/tractian-logo";
import { cn } from "@/lib/utils";

interface ILogoProps {
  className?: string;
}

export function Logo(props: Readonly<ILogoProps>) {
  const { className } = props;

  return (
    <Link className="text-textForeground" href="/">
      <TractianLogo className={cn("cursor-pointer", className)} />
    </Link>
  );
}
