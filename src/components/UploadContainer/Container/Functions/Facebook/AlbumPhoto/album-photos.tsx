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
  const albumPictures = albums.map((album: any) => album.picture.data.url);
  const albumCounts = albums.map((alb: any) => alb.count);

  return (
    <div className="image-display" style={{ marginTop: "55px" }}>
      {albumPictures.map((albumPicture: string, index: number) => (
        <div className="image-display-card" key={index}>
          <img
            className="image"
            src={albumPicture}
            alt=""
            onClick={() => {
              const pictureUrl = Object.values({ albumPicture });
              for (var i = 0; i < albums.length; i++) {
                if (
                  albums[i].picture.data.url === pictureUrl[0] &&
                  albumCounts[i] !== 0
                ) {
                  setPhotosInAlbum(albums[i]);
                  setDisplay("allPhotosInAlbum");
                } else if (
                  albums[i].picture.data.url === pictureUrl[0] &&
                  albumCounts[i] === 0
                ) {
                  setPhotosInAlbum(albums[i]);
                  setDisplay("noResults");
                }
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};
