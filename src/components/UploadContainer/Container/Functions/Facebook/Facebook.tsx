import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { InnerContainer } from "../../InnerContainer/Inner-Container";
import "./Facebook.styles.css";
import { PhotosOfYou } from "./TaggedPhoto/photos-of-you";
import { PhotoBar } from "./photo-bar/photoBar";
import { AlbumPhotos } from "./AlbumPhoto/album-photos";
import { AllPhotos } from "./AllPhotos/all-photos";
import { AllPhotosInAlbum } from "./AllPhotosInAlbum/allPhotosInAlbum";
import { NoData } from "../../../noData";
import axios from "axios";

export const Facebook = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [albums, setAlbums] = useState([]);
  const [facebookPicture, setFacebookPicture] = useState<string>("");
  const [photos, setPhotos] = useState<any>([]);
  const [display, setDisplay] = useState<string>("allPhotos");
  const [allPhoto, setAllPhoto] = useState<any>([]);
  const [PhotosInAlbum, setPhotosInAlbum] = useState<any>({});

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", facebookPicture);
    formData.append("upload_preset", "mjvep4sg");
    console.log("myFile", facebookPicture);
    axios
      .post(
        "https://api.cloudinary.com/v1_1/safari-webstore/image/upload",
        formData
      )
      .then((response) => {
        console.log(response);
      });

    setLogin(false);
  };

  const responseFacebook = (response: any) => {
    console.log(response);
    setLogin(true);

    //Fetch Album
    setAlbums(response.albums.data.map((album: any) => album));

    //Fetch Tagged Photos
    setPhotos(response.photos.data.map((photo: any) => photo.picture));

    // Fetch Your Photos
    let uploaded;

    const albumResponse = response.albums.data;
    const albumCounts = response.albums.data.map((alb: any) => alb.count);

    var uploadedPicturesData: any = [];

    for (var i = 0; i < albumResponse.length; i++) {
      if (albumCounts[i] !== 0) {
        uploaded = response.albums.data.map((album: any) => album.photos);
        uploaded[i].data.map((uploadedpicture: any) =>
          uploadedPicturesData.push(uploadedpicture.picture)
        );
      } else {
        continue;
      }
    }
    setAllPhoto(uploadedPicturesData);
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

  // const handleSelectPicture = (e: any) => {
  //   setPicture("selected")
  // }

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
            setDisplay={setDisplay}
            photosInAlbum={PhotosInAlbum}
            setLogin={setLogin}
          />
          {display === "allPhotos" && (
            <AllPhotos
              uploadedPhotos={allPhoto}
              setPicture={setFacebookPicture}
              uploadImage={uploadImage}
            />
          )}
          {display === "taggedPhotos" && (
            <PhotosOfYou
              photos={photos}
              setPicture={setFacebookPicture}
              uploadImage={uploadImage}
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
            <AllPhotosInAlbum
              photosInAlbum={PhotosInAlbum}
              setPicture={setFacebookPicture}
              uploadImage={uploadImage}
            />
          )}

          {display === "noResults" && <NoData />}
        </InnerContainer>
      )}
    </div>
  );
};
