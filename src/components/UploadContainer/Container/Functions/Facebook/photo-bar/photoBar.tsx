import React from "react";
import { BiLogOut, BiArrowBack } from "react-icons/bi";
import { usePrevious } from "../../../../usePrevious";

interface PhotosBarProps {
  photos?: any;
  handleTaggedPhotos: any;
  handleAlbumPhotos?: any;
  handleUploadedPhotos?: any;
  display?: string;
  setDisplay?: any;
  photosInAlbum?: any;
  setLogin?: any;
}

export const PhotoBar: React.FC<PhotosBarProps> = ({
  handleTaggedPhotos,
  handleAlbumPhotos,
  handleUploadedPhotos,
  display,
  setDisplay,
  photosInAlbum,
  setLogin,
}) => {
  const albumName = photosInAlbum.name;

  const prevValue = usePrevious(display);
  const handleBackArrow = () => {
    setDisplay(prevValue);
  };

  return (
    <div>
      {display === "allPhotosInAlbum" ? (
        <div className="photo-bar">
          <ul
            className="photo-folder"
            style={{
              justifyContent: "flex-start",
              paddingLeft: "22px",
            }}
          >
            <li className="photo-bar-icon">
              <BiArrowBack
                style={{
                  fontSize: "22px",
                  paddingRight: "10px",
                  color: "#888888",
                }}
                onClick={handleBackArrow}
              />
            </li>
            <li className="photo-bar-icon">{albumName}</li>
          </ul>
        </div>
      ) : (
        <div className="photo-bar">
          <ul className="photo-folder">
            <li style={{ paddingTop: "16px" }} onClick={handleUploadedPhotos}>
              Your Photos
            </li>
            <li style={{ paddingTop: "16px" }} onClick={handleTaggedPhotos}>
              Photos of You
            </li>
            <li style={{ paddingTop: "16px" }} onClick={handleAlbumPhotos}>
              Albums
            </li>
            <li>
              <BiLogOut
                style={{
                  fontSize: "22px",
                  color: "#888888",
                  paddingTop: "8px",
                }}
                onClick={() => setLogin(false)}
              />
            </li>
          </ul>
        </div>
      )}
      {display === "noResults" && (
        <div className="photo-bar">
          <ul
            className="photo-folder"
            style={{
              justifyContent: "flex-start",
              paddingLeft: "22px",
            }}
          >
            <li className="photo-bar-icon">
              <BiArrowBack
                style={{
                  fontSize: "22px",
                  paddingRight: "10px",
                  color: "#888888",
                }}
                onClick={handleBackArrow}
              />
            </li>
            <li className="photo-bar-icon">{albumName}</li>
          </ul>
        </div>
      )}
    </div>
  );
};
