import "./Header.styles.css";
import React from "react";

import { Exit } from "./Exit";
import { NavBar } from "../NavBar/NavBar";

type CustomValue = unknown;

interface Props {
  setInnerContainer: CustomValue;
}

export const Header = ({ setInnerContainer }: Props) => {
  return (
    <header className="header">
      <NavBar setInnerContainer={setInnerContainer} />
      <Exit />
    </header>
  );
};
