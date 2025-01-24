import { getInitials } from "@/helpers/persona";
import Image from "next/image";

interface IPersonaProps {
  name: string;
  image?: string;
}

export function Persona(props: Readonly<IPersonaProps>) {
  const { image, name } = props;

  const initials = getInitials(name, 1);

  if (!image) {
    return (
      <div className="flex items-center gap-x-2">
        <InitialBadge initials={initials} />
        <span className="text-base text-textMedium font-light">{name}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-2">
      <Image
        src={image}
        alt="Profile Picture"
        width={24}
        height={24}
        className="rounded-full"
      />

      <span className="text-base text-textMedium font-light">{name}</span>
    </div>
  );
}

interface IInitialBadgeProps {
  initials: string;
}

function InitialBadge(props: Readonly<IInitialBadgeProps>) {
  const { initials } = props;

  return (
    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white">
      <span className="text-xs">{initials}</span>
    </div>
  );
}
