import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./Drop.styles.css";
import { ImageCrop } from "../../ImageCrop/ImageCrop";
import { FileUploader } from "react-drag-drop-files";

type CustomValue = any;

interface DropProps {
  file: CustomValue;
  setFile: any;
  uploadImage: any;
}

export const Drop: React.FC<DropProps> = ({ file, setFile, uploadImage }) => {
  const fileTypes = ["JPG", "PNG", "JPEG"];

  const handleDrop = (file: CustomValue) => {
    console.log(file);
    setFile(file);
  };

  return (
    <div>
      {file === null ? (
        <FileUploader
          handleChange={handleDrop}
          name="file"
          types={fileTypes}
          style={{
            width: "733px",
            height: "430px",
          }}
          className="drag-drop"
        >
          <FaCloudUploadAlt style={{ fontSize: "100px" }} />
          <p>Drag and Drop an asset here</p>
          <span className="or">Or</span>
        </FileUploader>
      ) : (
        <ImageCrop file={file} setFile={setFile} uploadImage={uploadImage} />
      )}
    </div>
  );
};
