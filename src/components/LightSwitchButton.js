import React, { useState } from "react";

function LightSwitchButton(props){
  console.log("parent passed to child as props to lightswitchbutton", props)
  const {light, setLight} = props;
  //const handleClick = () => props.switchLight();

  return (
    <button className="LightSwitchButton" onClick={() => {props.switchLight()}}>
      {light === "on" && <span className="on"><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;