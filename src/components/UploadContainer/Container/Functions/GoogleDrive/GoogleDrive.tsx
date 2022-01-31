import React from "react";
import { FaGoogleDrive } from "react-icons/fa";
import CustomButton from "../../Custom-Button/custom-button";

export const GoogleDrive = () => {
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
      <p style={{ color: "black" }}>Upload files from your Google Drive.</p>

      <CustomButton onClick={""}>
        <FaGoogleDrive style={{ paddingRight: "8px", fontSize: "17px" }} />{" "}
        Connect to Google Drive
      </CustomButton>
    </div>
  );
};
