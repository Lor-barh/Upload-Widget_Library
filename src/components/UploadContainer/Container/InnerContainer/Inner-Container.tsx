import React, { ReactNode } from "react";
import "./Inner-Container.styles.css";

interface InnerContainerProps {
  className?: string;
  children?: ReactNode;
  style?: any;
}

export const InnerContainer: React.FC<InnerContainerProps> = ({ children }) => {
  return <div className="inner-container">{children}</div>;
};
