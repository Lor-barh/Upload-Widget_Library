import React from "react";

interface PhotosOfYouProps {
  photos?: any;
}

export const PhotosOfYou: React.FC<PhotosOfYouProps> = ({ photos }) => {
  return (
    <div>
      <div className="image-display">
        {photos.map((photo: string, index: number) => (
          <div className="image-display-card">
            <img className="image" src={photo} alt="" />
          </div>
        ))}
      </div>
      <div className="social-upload-btn">
        <button className="upload-btn">Upload</button>
      </div>
    </div>
  );
};
