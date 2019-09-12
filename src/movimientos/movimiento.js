import React from "react";
import movimientos from "../data/movimientos";
import { MdPlayCircleFilled } from "react-icons/md";
import { newText } from "../utils/helperFunctions";

const pink = "#ff8592";

export default class Movimiento extends React.Component {
  getHeight = () => window.innerHeight - 144 - 60;

  render() {
    console.log("in prota", this.props.match.params.id);
    const name = this.props.match.params.id.replace(":", "");
    const movimiento = movimientos.find(item => item.name === name);
    console.log("name", name, movimiento);
    return (
      <div className="AppContainer" style={{ alignContent: "center" }}>
        <div
          className="Movimiento NabBarAvoidingHeight"
          style={{
            backgroundImage: `url(${movimiento.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom"
          }}
        >
          <div className="MovimientoFichaContainer">
            <p className="Name">{name.toUpperCase()}</p>
            {/* <p className="Mov">{`MOV: ${movimientos.movimiento.toUpperCase()}`}</p> */}
            {newText(movimiento.text)}
            <div className="Centred">
              <h1>
                <MdPlayCircleFilled size="4em" color={pink} />
              </h1>
            </div>
          </div>
          <div className="Centred MovimientoImageContainer">
            {/* <img
              className="Centred MovimientoImage"
              src={movimiento.img}
              alt=""
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
