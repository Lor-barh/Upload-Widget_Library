import axios from "axios";
import * as React from "react";
import { ImageCrop } from "../../ImageCrop/ImageCrop";
import { FirstState } from "./FirstState";
import "./FirstState.styles.css";

interface FileProps {
  e?: React.ChangeEvent<HTMLInputElement>;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  uploadImage?: any;
}

export const MyFile: React.FC<FileProps> = () => {
  const [file, setFile] = React.useState<any>(null);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = () => {
    console.log("print");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mjvep4sg");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/safari-webstore/image/upload",
        formData
      )
      .then((response) => {
        console.log(response);
      });

    setFile(null);
  };

  return (
    <div>
      {file === null ? (
        <FirstState
          handleChange={handleChange}
          file={file}
          setFile={setFile}
          uploadImage={uploadImage}
        />
      ) : (
        <ImageCrop file={file} setFile={setFile} uploadImage={uploadImage} />
      )}
    </div>
  );
};
