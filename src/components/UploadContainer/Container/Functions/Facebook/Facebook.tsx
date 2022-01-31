import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { InnerContainer } from "../../InnerContainer/Inner-Container";
import "./Facebook.styles.css";
import { PhotosOfYou } from "./TaggedPhoto/photos-of-you";
import { PhotoBar } from "./photo-bar/photoBar";
import { AlbumPhotos } from "./AlbumPhoto/album-photos";
import { AllPhotos } from "./AllPhotos/all-photos";
import { AllPhotosInAlbum } from "./AllPhotosInAlbum/allPhotosInAlbum";

export const Facebook = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [albums, setAlbums] = useState([]);
  const [picture, setPicture] = useState<string>("");
  const [photos, setPhotos] = useState<any>([]);
  const [display, setDisplay] = useState<string>("allPhotos");
  const [allPhoto, setAllPhoto] = useState<any>([]);
  const [PhotosInAlbum, setPhotosInAlbum] = useState<any>({});

  const responseFacebook = (response: any) => {
    console.log(response);
    setLogin(true);

    //Fetch Album
    // setAlbums(response.albums.data.map((album: any) => album.picture.data.url));

    setAlbums(response.albums.data.map((album: any) => album));

    // console.log(
    //   "albums",
    //   response.albums.data.map((album: any) => album)
    // );

    //Fetch Tagged Photos
    setPhotos(response.photos.data.map((photo: any) => photo.picture));

    // Fetch Your Photos
    const uploaded = response.albums.data.map((album: any) => album.photos);
    var uploadedPicturesData: any = [];

    for (var i = 0; i < uploaded.length; i++) {
      uploaded[i].data.map((uploadedpicture: any) =>
        uploadedPicturesData.push(uploadedpicture.picture)
      );
      setAllPhoto(uploadedPicturesData);
    }
  };

  const handlePhotosOfYou = () => {
    setDisplay("taggedPhotos");
  };

  const handleAlbumPhotos = () => {
    setDisplay("albumPhotos");
  };

  const handleUploadedPhotos = () => {
    setDisplay("allPhotos");
  };

  return (
    <div>
      {!login && (
        <div
          className="no-border"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "rgba(130, 139, 158, 0.5)",
            fontSize: "20px",
          }}
        >
          <p style={{ color: "black" }}>
            Upload files from your Facebook account.
          </p>

          <FacebookLogin
            appId="611945483241349"
            autoLoad={false}
            fields="albums{picture,count,name,photos.limit(500){picture}},photos.limit(500*1000){picture}"
            scope="public_profile,user_photos"
            callback={responseFacebook}
            icon="fa-facebook-square"
            cssClass="custom-button"
            textButton="Connect to Facebook"
          />
        </div>
      )}
      {login && (
        <InnerContainer>
          <PhotoBar
            handleTaggedPhotos={handlePhotosOfYou}
            handleAlbumPhotos={handleAlbumPhotos}
            handleUploadedPhotos={handleUploadedPhotos}
            display={display}
            photosInAlbum={PhotosInAlbum}
          />
          {display === "allPhotos" && <AllPhotos uploadedPhotos={allPhoto} />}
          {display === "taggedPhotos" && (
            <PhotosOfYou
              photos={photos}
              key={photos.map((keyPhoto: any) => keyPhoto.index)}
            />
          )}
          {display === "albumPhotos" && (
            <AlbumPhotos
              albums={albums}
              setPhotosInAlbum={setPhotosInAlbum}
              setDisplay={setDisplay}
            />
          )}

          {display === "allPhotosInAlbum" && (
            <AllPhotosInAlbum photosInAlbum={PhotosInAlbum} />
          )}
        </InnerContainer>
      )}
    </div>
  );
};
