import axios from "axios";
import React, { useState } from "react";
import Webcam from "react-webcam";
import "./Camera.styles.css";

interface CameraProps {
  //   webcamRef: React.MutableRefObject<any>;
}

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 730,
  height: 430,
  facingMode: "user",
  maxHeight: "430px",
};

export const Camera: React.FC<CameraProps> = () => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef<any>(null);

  const capture = React.useCallback(() => {
    console.log("captured");
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
  }, [webcamRef]);

  const uploadImage = () => {
    console.log("print");
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mjvep4sg");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/safari-webstore/image/upload",
        formData
      )
      .then((response) => {
        console.log(response);
      });

    setImage("");
  };

  const handleClick = () => {
    setImage("");
  };

  return (
    <div>
      {image === "" ? (
        <div className="web-cam">
          <div className="web-cam-img">
            <Webcam
              audio={false}
              height={430}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={730}
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture} className="webcam-btn">
            Capture
          </button>
        </div>
      ) : (
        <div className="capture">
          <img src={image} alt="" className="captured-img" />
          <div className="camera-btn">
            <button className="crop-btn" onClick={handleClick}>
              Cancel
            </button>
            <button className="skip-btn" onClick={uploadImage}>
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
