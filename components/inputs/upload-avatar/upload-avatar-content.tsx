import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface IUploadAvatarContentProps {
  value: File;
}

export function UploadAvatarContent(
  props: Readonly<IUploadAvatarContentProps>
) {
  const { value } = props;

  return (
    <Image
      src={URL.createObjectURL(value)}
      alt="Avatar"
      width={336}
      height={226}
      sizes="100vw"
    />
  );
}
