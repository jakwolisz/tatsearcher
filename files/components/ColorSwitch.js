import React from "react";

const ColorSwitch = ({changeColor}) => {

return (
   <>
   <div className="switch-container">
        <button className="button-switch red" onClick={() => {changeColor("red")}}></button>
        <button className="button-switch blue" onClick={() => {changeColor("blue")}}></button>
   </div>
  </>
);
};

export default ColorSwitch;
