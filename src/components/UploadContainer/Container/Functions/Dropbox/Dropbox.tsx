import React from "react";
import { FaDropbox } from "react-icons/fa";
import CustomButton from "../../Custom-Button/custom-button";

export const Dropbox = () => {
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
      <p style={{ color: "black" }}>Upload files from your Dropbox account.</p>

      <CustomButton onClick={""}>
        <FaDropbox style={{ paddingRight: "8px", fontSize: "17px" }} /> Connect
        to Dropbox
      </CustomButton>
    </div>
  );
};
