import React from "react";

interface AllPhotosInAlbumProps {
  photosInAlbum?: any;
}

export const AllPhotosInAlbum: React.FC<AllPhotosInAlbumProps> = ({
  photosInAlbum,
}) => {
  const allAlbumPictures = photosInAlbum.photos.data.map(
    (photo: any) => photo.picture
  );
  console.log("APIA", allAlbumPictures);

  return (
    <div>
      <div className="image-display">
        {allAlbumPictures.map((allAlbumPicture: string, index: number) => (
          <div className="image-display-card">
            <img className="image" src={allAlbumPicture} alt="" key={index} />
          </div>
        ))}
      </div>
      <div className="social-upload-btn">
        <button className="upload-btn">Upload</button>
      </div>
    </div>
  );
};
