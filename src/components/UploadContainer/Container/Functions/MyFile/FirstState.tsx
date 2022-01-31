import React, { useRef } from "react";
import CustomButton from "../../Custom-Button/custom-button";
import "./FirstState.styles.css";
import { Drop } from "./Drop";

type CustomValue = any;

interface FirstStateProps {
  uploadImage: any;
  file: CustomValue;
  setFile: CustomValue;
  handleChange: CustomValue;
}

export const FirstState: React.FC<FirstStateProps> = ({
  handleChange,
  uploadImage,
  file,
  setFile,
}) => {
  const hiddenFileInput = useRef<any>(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="border">
      <Drop file={file} setFile={setFile} uploadImage={uploadImage} />

      <CustomButton onClick={handleClick}>Browse</CustomButton>
      <input
        accept="image/*"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
};
