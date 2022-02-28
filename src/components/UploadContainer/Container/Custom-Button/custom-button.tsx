import React, { ReactNode } from "react";
import "./Custom-Button.styles.css";

interface ButtonProps {
  children: ReactNode | Element[] | any;
  // className: string;
  // children: ReactNode;
  // children: string;
  onClick: any;
}

const CustomButton: React.FC<ButtonProps> = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
