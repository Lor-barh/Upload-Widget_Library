import React, { useState } from "react";

interface AlbumPhotosProps {
  albums?: any;
  onClick?: any;
  setPhotosInAlbum?: any;
  setDisplay?: any;
}

export const AlbumPhotos: React.FC<AlbumPhotosProps> = ({
  albums,
  setPhotosInAlbum,
  setDisplay,
}) => {
  const [albumdisplay, setAlbumDisplay] = useState<string>("");

  const albumPictures = albums.map((album: any) => album.picture.data.url);
  console.log(albumPictures);

  const albumMap = albums;
  console.log("Map", albumMap);

  return (
    <div className="image-display">
      {albumPictures.map((albumPicture: string, index: number) => (
        <div className="image-display-card">
          <img
            className="image"
            src={albumPicture}
            alt=""
            key={index}
            onClick={() => {
              const pictureUrl = Object.values({ albumPicture });
              console.log(pictureUrl[0]);
              var AllAlbumPhotos = null;
              for (var i = 0; i < albums.length; i++) {
                if (albums[i].picture.data.url === pictureUrl[0]) {
                  setPhotosInAlbum(albums[i]);
                  setDisplay("allPhotosInAlbum");
                }
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};
