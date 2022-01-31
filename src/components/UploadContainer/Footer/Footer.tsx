import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: any;
}

export const Footer = ({ children }: Props) => {
  return (
    <div style={{ borderTop: "0.5px solid rgb(124, 124, 124)" }}>
      {children}
    </div>
  );
};
