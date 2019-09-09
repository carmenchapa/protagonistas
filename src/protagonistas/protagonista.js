import React from "react";
import protas from "../data/protagonistas";
import { MdPlayCircleFilled } from "react-icons/md";
import { newText } from "../utils/helperFunctions";
import { callbackify } from "util";

const pink = "#ff8592";

export default class Protagonista extends React.Component {
  getHeight = () => window.innerHeight - 144 - 60;

  render() {
    // console.log('in prota', this.props.match.params.id)
    const name = this.props.match.params.id.replace(":", "");
    const protagonista = protas.find(item => item.name === name);

    return (
      <div className="AppContainer" style={{ alignContent: "center" }}>
        <div className="Protagonista NabBarAvoidingHeight">
          <div className="ProtaFichaContainer">
            <p className="Name">{name.toUpperCase()}</p>
            <p className="Mov">{`MOV: ${protagonista.movimiento.toUpperCase()}`}</p>
            {newText(protagonista.text)}
            <div className="Centred">
              <h1>
                <MdPlayCircleFilled size="4em" color={pink} />
              </h1>
            </div>
          </div>
          <div className="Centred ProtaImageContainer">
            <img className="Centred ProtaImage" src={protagonista.img} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
