import React from "react";

interface AllPhotosProps {
  uploadedPhotos?: any;
  setPicture?: any;
  uploadImage?: any;
}

export const AllPhotos: React.FC<AllPhotosProps> = ({
  uploadedPhotos,
  setPicture,
  uploadImage,
}) => {
  let current: any = "";

  const selectPictureHandler = (id: number) => {
    const classElement = document.getElementsByClassName("image");

    const classElementLength = classElement.length;

    for (let i = 0; i < classElementLength; i++) {
      // It is necessary to add a keyword in the global css file
      if (id === i) {
        classElement[i].classList.add("togglePictureSelector");
        current = classElement[i].getAttribute("src");
      } else {
        classElement[i].classList.remove("togglePictureSelector");
      }
    }
    console.log("cur", current);
    setPicture(current);
  };

  return (
    <div>
      <div className="image-display">
        {uploadedPhotos.map((uploadedPhoto: string, index: number) => (
          <div className="image-display-card" key={index}>
            <img
              className="image"
              src={uploadedPhoto}
              alt=""
              id={`imageId-${index}`}
              onClick={() => selectPictureHandler(index)}
            />
          </div>
        ))}
      </div>
      <div className="social-upload-btn">
        <button className="upload-btn" onClick={uploadImage}>
          Upload
        </button>
      </div>
    </div>
  );
};
