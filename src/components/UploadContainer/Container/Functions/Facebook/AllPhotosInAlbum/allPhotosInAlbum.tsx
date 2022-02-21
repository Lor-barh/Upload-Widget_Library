import React from "react";

interface AllPhotosInAlbumProps {
  photosInAlbum?: any;
  setPicture?: any;
  uploadImage?: any;
}

export const AllPhotosInAlbum: React.FC<AllPhotosInAlbumProps> = ({
  photosInAlbum,
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
    setPicture(current);
  };

  const allAlbumPictures = photosInAlbum.photos.data.map(
    (photo: any) => photo.picture
  );

  return (
    <div>
      <div className="image-display">
        {allAlbumPictures.map((allAlbumPicture: string, index: number) => (
          <div className="image-display-card" key={index}>
            <img
              className="image"
              src={allAlbumPicture}
              alt=""
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
