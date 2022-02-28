import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import CustomButton from "../../Custom-Button/custom-button";
import { ImageCrop } from "../../ImageCrop/ImageCrop";
import "./WebAddress.styles.css";

interface WebAddressProps {
  handleClick?: string;
}

export const WebAddress: React.FC<WebAddressProps> = () => {
  const [address, setAddress] = useState<any>(null);

  let imageSrc = "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    imageSrc = e.target.value;
  };

  const handleClick = () => {
    setAddress(imageSrc);
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", address);
    formData.append("upload_preset", "mjvep4sg");
    console.log("myFile", address);
    axios
      .post(
        "https://api.cloudinary.com/v1_1/safari-webstore/image/upload",
        formData
      )
      .then((response) => {
        console.log(response);
      });

    setAddress(null);
  };

  return (
    <div>
      {address === null ? (
        <div className="no-border">
          <p className="public-url">Public URL of file to upload:</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="http://site.example/images/image.jpg"
              className="search-box"
              onChange={handleChange}
            />
            <CustomButton onClick={handleClick}>
              <FaArrowRight />{" "}
            </CustomButton>
          </div>
        </div>
      ) : (
        <ImageCrop address={address} uploadImage={uploadImage} />
      )}
    </div>
  );
};
