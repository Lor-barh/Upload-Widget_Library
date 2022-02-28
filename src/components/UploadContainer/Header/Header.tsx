import "./Header.styles.css";
import React from "react";

import { NavBar } from "../NavBar/NavBar";
import {Exit} from "./ExitComponent";
import "./Header.styles.css"

type CustomValue = unknown;

interface Props {
  setInnerContainer: CustomValue;
}

export const Header = ({ setInnerContainer }: Props) => {
  return (
    <header className="header">
      <NavBar setInnerContainer={setInnerContainer} />
      <Exit/>
    </header>
  );
};
