import { cn } from "@/lib/utils";
import { ImageUp } from "lucide-react";
import { DropzoneRootProps } from "react-dropzone";

export type DragAndDropStrings = {
  dragAndDrop?: string;
  dragAndDropDescription?: string;
  acceptDescription?: string;
};

interface IDragAndDropTextProps {
  children: React.ReactNode;

  icon?: React.ReactNode;
  strings?: DragAndDropStrings;

  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;

  hasError: boolean;
}

export function DragAndDropContent(props: Readonly<IDragAndDropTextProps>) {
  const { children, icon, getRootProps, hasError } = props;

  return (
    <div
      className={cn(
        "w-full h-full bg-inputBackground border-2 border-dashed rounded-lg flex flex-col gap-1 p-6 items-center justify-center select-none cursor-pointer border-borderPrimary hover:bg-accent transition-all",
        hasError && "border-red-500"
      )}
      {...getRootProps()}
    >
      {children}

      <div
        className={cn(
          "flex flex-col gap-2 text-center",
          hasError ? "text-red-500" : "text-muted-foreground"
        )}
      >
        <div className="flex items-center justify-center rounded-lg text-secondary-foreground">
          {icon ?? <ImageUp className="w-8 h-8" />}
        </div>

        <span className="text-sm">Adicionar imagem do Ativo</span>
      </div>
    </div>
  );
}
