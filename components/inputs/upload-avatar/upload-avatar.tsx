import { DragAndDrop } from "../drag-and-drop/drag-and-drop";
import { UploadAvatarContent } from "./upload-avatar-content";

interface IUploadAvatarProps {
  name: string;
  onChange: (file: File | null) => void;
  onBlur?: () => void;

  value?: File;

  error?: boolean;
  disabled?: boolean;
}

export function UploadAvatar(props: Readonly<IUploadAvatarProps>) {
  const { name, onChange, onBlur, value, error, disabled } = props;

  const componentName = "upload-avatar-input-" + name;

  function handleChange(files: File[]) {
    if (files.length === 0) {
      return;
    }

    const firstFile = files[0];
    onChange(firstFile);
  }

  if (!value) {
    return (
      <div id={componentName} className="w-full h-full flex flex-col">
        <DragAndDrop
          name={name}
          onChange={handleChange}
          value={value ?? []}
          onBlur={onBlur}
          multiple={false}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"]
          }}
          error={error}
          disabled={disabled}
        />
      </div>
    );
  }

  return (
    <div
      id={componentName}
      className="max-w-[336px] max-h-[226px] flex overflow-hidden rounded-lg"
    >
      <UploadAvatarContent value={value} />
    </div>
  );
}
