import React from "react";
import { BiLogOut, BiArrowBack } from "react-icons/bi";
// import { useHistory } from "react-router-dom";

interface PhotosBarProps {
  photos?: any;
  handleTaggedPhotos: any;
  handleAlbumPhotos?: any;
  handleUploadedPhotos?: any;
  display?: string;
  photosInAlbum?: any;
}

export const PhotoBar: React.FC<PhotosBarProps> = ({
  handleTaggedPhotos,
  handleAlbumPhotos,
  handleUploadedPhotos,
  display,
  photosInAlbum,
}) => {
  const albumName = photosInAlbum.name;
//   const history = useHistory();

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
                // onClick={() => history.goBack()}
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
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
