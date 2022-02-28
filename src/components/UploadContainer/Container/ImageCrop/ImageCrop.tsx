import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import { InnerContainer } from "../InnerContainer/Inner-Container";
import "react-image-crop/dist/ReactCrop.css";
import { BiCrop, BiReset } from "react-icons/bi";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./ImageCrop.styles.css";
// import { image64toCanvasRef } from "./ReusableUtils";

type CustomValue = any;

interface ImageProps {
  file?: any;
  setFile?: CustomValue;
  uploadImage?: () => void;
  address?: any
}

export const ImageCrop: React.FC<ImageProps> = ({ file, uploadImage, address }) => {
  // const imagePreviewCanvasRef = React.createRef();

  const [crop, setCrop] = useState<CustomValue>({
    unit: "%",
    width: 100,
    aspect: 16 / 9,
    y: 25,
  });

  const handleOnCropChange = (newCrop: CustomValue) => {
    setCrop(newCrop);
  };

  const handleReset = () => {
    setCrop({ unit: "%", width: 100, aspect: 16 / 9, y: 25 });
  };

  return (
    <div>
      <InnerContainer className="image-crop-container">
        <ReactCrop
          style={{
            position: "absolute",
            bottom: "75px",
          }}
          imageStyle={{
            height: "460px",
            width: "auto",
          }}
          src={file ? URL.createObjectURL(file) : address}
          // alt={file && file.name}
          crop={crop}
          // onImageLoaded={onImageLoaded}
          onChange={handleOnCropChange}
          onComplete={handleOnCropChange}
        />

        <div className="btn">
          <div className="reset-btn">
            <BiReset
              onClick={handleReset}
              className="btn-in"
              style={{
                marginRight: "3px",
              }}
            />
            <span onClick={handleReset}>Reset</span>
          </div>
          <div>
            <button className="crop-btn" onClick={uploadImage}>
              <BiCrop className="btn-in" /> Crop
            </button>
            <button className="skip-btn" onClick={uploadImage}>
              <FaCloudUploadAlt className="btn-in" /> Skip
            </button>
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};
