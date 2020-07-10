import React, { useState } from "react";
import Navigation from "./Navigation";
import Options from "./Options";
import ColorSwitch from "./ColorSwitch";

const Header = ({color, changeColor}) => {

  return (
    <div>
      <ColorSwitch changeColor={changeColor} />
      <div id="header_logo">
        <img src={`./images/logo_tatsearcher_final_${color}.png`}></img>
      </div>
      <Navigation color={color} />
      <Options color={color} />
    </div>
  );
};

export default Header;
