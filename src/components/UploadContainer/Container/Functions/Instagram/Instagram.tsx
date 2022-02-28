import React from "react";
import { FaInstagram } from "react-icons/fa";
import CustomButton from "../../Custom-Button/custom-button";
// import { InstagramLogin } from "react-instagram-login";

export const Instagram = () => {
  const responseInstagram = (response: any) => {
    console.log(response);
  };
  return (
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
        Upload photos from your Instagram account.
      </p>
      <CustomButton onClick={""}>
        <FaInstagram style={{ paddingRight: "8px", fontSize: "17px" }} />{" "}
        Connect to Instagram
      </CustomButton>

      {/* <InstagramLogin
        clientId="5fd2f11482844c5eba963747a5f34556"
        buttonText="Login"
        onSuccess={responseInstagram}
        onFailure={responseInstagram}
      /> */}
    </div>
  );
};
