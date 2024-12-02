import Link from "next/link";
import { TractianLogo } from "./icons/tractian-logo";

export function Logo() {
  return (
    <Link className="text-textForeground" href="/">
      <TractianLogo className="cursor-pointer" />
    </Link>
  );
}
