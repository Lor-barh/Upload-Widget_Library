import React, { useState } from "react";
import "./Upload-Modal.styles.css";
import { Header } from "./Header/Header";
import ShowLoveLogo from "./img/showlovelogo.svg";
import { Footer } from "./Footer/Footer";
import { InnerContainerContent } from "./Container/InnerContainer/InnerContainerContent/InnerContainerContent";

export const UploadModal = () => {
  const [innerContainer, setInnerContainer] = useState<string>("file");

  return (
    <div className="container">
      <Header setInnerContainer={setInnerContainer} />

      <InnerContainerContent innerContainer={innerContainer} />

      <Footer >
        <img src={ShowLoveLogo} alt="ShowLove" className="logo" />
      </Footer>
    </div>
  );
};
