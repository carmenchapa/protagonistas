import React from "react";
import protas from "../data/protagonistas";
import { MdPlayCircleFilled } from "react-icons/md";

const pink = "#ff8592";

export default class Protagonista extends React.Component {
  getHeight = () => window.innerHeight - 144 - 60;

  newText = text =>
    text.split("\n").map((item, i) => {
      return (
        <p key={i} className="Text">
          {item}
        </p>
      );
    });

  render() {
    // console.log('in prota', this.props.match.params.id)
    const name = this.props.match.params.id.replace(":", "");
    const protagonista = protas.find(item => item.name === name);

    return (
      <div className="AppContainer" style={{ alignContent: "center" }}>
        <div className="Protagonista NabBarAvoidingHeight">
          <div
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: 80
            }}
          >
            <p className="Name">{name.toUpperCase()}</p>
            <p className="Mov">{`MOV: ${protagonista.movimiento.toUpperCase()}`}</p>
            {/* <p className="Text">{protagonista.text.replace("<br/>", "\n")}</p> */}
            {this.newText(protagonista.text)}
            <div className="Centred">
              <h1>
                <MdPlayCircleFilled size="4em" color={pink} />
              </h1>
            </div>
          </div>
          <div
            className="Centred"
            style={{
              justifyContent: "flex-end",
              padding: 30,
              paddingTop: 72 + 30
            }}
          >
            <img
              className="Centred"
              height="100%"
              width="60%"
              src={protagonista.img}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
