import React from "react";
import { Dropbox } from "../../Functions/Dropbox/Dropbox";
import { Facebook } from "../../Functions/Facebook/Facebook";
import { Instagram } from "../../Functions/Instagram/Instagram";
import { Twitter } from "../../Functions/Twitter/Twitter";
import { MyFile } from "../../Functions/MyFile/MyFile";
import { WebAddress } from "../../Functions/WebAddress/WebAddress";
import { GoogleDrive } from "../../Functions/GoogleDrive/GoogleDrive";
import { InnerContainer } from "../Inner-Container";
import { Camera } from "../../Functions/Camera/Camera";

interface InnerContainerContentProps {
  innerContainer: string | unknown;
 
}

export const InnerContainerContent: React.FC<InnerContainerContentProps> = ({
  innerContainer,
}) => {
  return (
    <InnerContainer>
      {innerContainer === "file" && <MyFile />}
      {innerContainer === "address" && <WebAddress />}
      {innerContainer === "camera" && <Camera />}
      {innerContainer === "google" && <GoogleDrive />}
      {innerContainer === "dropbox" && <Dropbox />}
      {innerContainer === "facebook" && <Facebook />}
      {innerContainer === "instagram" && <Instagram />}
      {innerContainer === "twitter" && <Twitter />}
    </InnerContainer>
  );
};
