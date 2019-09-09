import React from "react";
import "../static/images/map.png";
import data from "../data/generalTexts";
import { newText } from "../utils/helperFunctions";

export default class Home extends React.Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className="HomeBackground NabBarAvoiding">
          <p className="HomeTitle">
            PROTAGONISTAS <br />
            DEL PROGRESO
          </p>
        </div>
        <div
          className="FullHeight FlexStyle"
          style={{ flexDirection: "column", flex: 1, alignSelf: "center" }}
        >
          <div style={secondContainerStyle}>
            <Square
              text="¿Qué es Protagonistas del progreso?"
              color="#d8d5bd"
              size={"45vh"}
              fontSize={50}
            />
            <Rectangle
              src={require("../static/images/map.png")}
              width={"55vh"}
              height={"40vh"}
            />
          </div>
        </div>
        <div className="FullHeight FlexStyle" style={thirdContainerStyle}>
          <p>{newText(data.introProtas)}</p>
        </div>
      </div>
    );
  }
}

const secondContainerStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "flex-end",
  alignContent: "center",
  margin: "auto",
  marginLeft: "5%",
  marginRight: "5%",
  maxHeight: "45vh"
};

const thirdContainerStyle = {
  marginLeft: "20vw",
  marginRight: "20vw",
  fontSize: "1.4rem"
};

const Square = props => (
  <div
    className="Centred"
    style={{
      backgroundColor: props.color,
      width: props.size,
      height: props.size,
      padding: 40
    }}
  >
    <p style={{ fontSize: props.fontSize }}>{props.text}</p>
  </div>
);

const Rectangle = props => (
  <div
    className="Centred"
    style={{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      alignItems: "flex-end"
    }}
  >
    <img src={props.src} width={"100%"} height={"100%"} alt="" />
  </div>
);
