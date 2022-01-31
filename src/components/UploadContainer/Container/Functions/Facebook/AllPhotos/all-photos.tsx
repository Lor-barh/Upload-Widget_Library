import React from "react";

interface AllPhotosProps {
  uploadedPhotos?: any;
}

export const AllPhotos: React.FC<AllPhotosProps> = ({ uploadedPhotos }) => {
  return (
    <div>
      <div className="image-display">
        {uploadedPhotos.map((uploadedPhoto: string, index: number) => (
          <div className="image-display-card">
            <img className="image" src={uploadedPhoto} alt="" key={index} />
          </div>
        ))}
      </div>
      <div className="social-upload-btn">
        <button className="upload-btn">Upload</button>
      </div>
    </div>
  );
};
