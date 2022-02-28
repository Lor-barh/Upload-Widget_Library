import React, { useEffect, useState } from "react";
import { FaGoogleDrive } from "react-icons/fa";
import CustomButton from "../../Custom-Button/custom-button";
import useDrivePicker from "react-google-drive-picker/dist";
import { ImageCrop } from "../../ImageCrop/ImageCrop";
import axios from "axios";

export const GoogleDrive = () => {

  const [googleDrive, setGoogleDrive] = useState<any>(null);

  const [openPicker, data, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: "387932018994-2porev0vg5pvjhvhn3bluah6auvgjhtk.apps.googleusercontent.com",
      developerKey: "AIzaSyBu5pAe7dgRXi6p0yA-hdlnuPY2q0bquak",
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,
      // customViews: customViewsArray, // custom view
    })
  }

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", googleDrive);
    formData.append("upload_preset", "mjvep4sg");
    console.log("myFile", googleDrive);
    axios
      .post(
        "https://api.cloudinary.com/v1_1/safari-webstore/image/upload",
        formData
      )
      .then((response) => {
        console.log(response);
      });

    setGoogleDrive(null);
  };

  useEffect(() => {
    if(data) {
      console.log(data)
      data.docs.map((doc) => {
        const imgUrl = `https://drive.google.com/uc?id=${doc.id}` 
        console.log(imgUrl)
        setGoogleDrive(imgUrl)
      })
    }
  })

  return (
    <div>
    {googleDrive === null ? <div
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

      <CustomButton onClick={handleOpenPicker}>
        <FaGoogleDrive style={{ paddingRight: "8px", fontSize: "17px" }} />{" "}
        Connect to Google Drive
      </CustomButton>
    </div> : 
    <ImageCrop address={googleDrive} uploadImage={uploadImage}/>
    }
    </div>
  );
};
