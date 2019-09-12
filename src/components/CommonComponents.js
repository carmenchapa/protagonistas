import React from "react";
import { newText } from "../utils/helperFunctions";

export const Square = props => (
  <div
    className="Centred"
    style={{
      backgroundColor: props.color,
      width: props.size,
      height: props.size,
      ...props.style
    }}
  >
    {props.text && (
      <div style={{ padding: 40, fontSize: props.fontSize }}>
        {/* <p style={{ fontSize: props.fontSize }}>{props.text}</p> */}
        {newText(props.text)}
      </div>
    )}
    {props.src && <img className="cover" src={props.src} alt="" />}
  </div>
);

export const Rectangle = props => (
  <div
    className="Centred"
    style={{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      alignItems: "flex-end",
      border: "none",
      ...props.style
    }}
  >
    {props.src && <img className="cover" src={props.src} alt="" />}
  </div>
);
