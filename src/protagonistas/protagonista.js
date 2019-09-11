import React from "react";
import protas from "../data/protagonistas";
import { Link } from "react-router-dom";
import { MdPlayCircleFilled } from "react-icons/md";
import { newText } from "../utils/helperFunctions";
import { Square, Rectangle } from "../components/CommonComponents";
import * as constants from "../utils/constants";

const pink = "#ff8592";

export default class Protagonista extends React.Component {
  getHeight = () => window.innerHeight - 144 - 60;

  render() {
    // console.log('in prota', this.props.match.params.id)
    const name = this.props.match.params.id.replace(":", "");
    const protagonista = protas.find(item => item.name === name);
    console.log(" mov", protagonista.movimiento);

    // const styles = {showSidebar: windowWidth > 768}
    return (
      <div className="AppContainer" style={{ alignContent: "center" }}>
        <div className="DarkContainer NabBarAvoidingHeight Row">
          <div className="ProtaFichaContainer" style={{ paddingBottom: "7vw" }}>
            {/* <div className="Centred Column"> */}
            <p className="Name">{name.toUpperCase()}</p>
            {/* <p className="Mov">{`MOV: ${protagonista.movimiento.toUpperCase()}`}</p> */}
            {newText(protagonista.text)}
            {/* </div> */}
            <div className="Centred">
              {/* <MovButton mov={protagonista.movimiento.toUpperCase()} /> */}
              <h1>
                <MdPlayCircleFilled size="8vw" color={pink} />
              </h1>
            </div>
          </div>
          <div className="Centred ProtaImageContainer">
            <img className="Centred ProtaImage" src={protagonista.img} alt="" />
          </div>
        </div>
        {/*  */}

        <div className="WhiteContainer NabBarAvoidingHeight Column">
          <div className="Row">
            <div
              className="Column"
              style={{
                width: "calc(100vw - 60vh - 30px)",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-7vw"
              }}
            >
              <div
                className="Row"
                style={{
                  width: "calc(100vw - 60vh - 30px)",
                  justifyContent: "center",
                  paddingBottom: 50
                }}
              >
                <Link
                  className="link"
                  to={{
                    pathname: `/movimientos:${protagonista.movimiento}`,
                    movimiento: protagonista.movimiento
                  }}
                >
                  <Square
                    text={`Comuna 13.\nEl movimiento`}
                    color={constants.CYAN}
                    size={"20vw"}
                    fontSize={"20vw"}
                    style={{ marginRight: 25 }}
                  />
                </Link>
                <Square
                  text={`Comuna 13.\nEl movimiento`}
                  color="#fff"
                  size={"20vw"}
                  fontSize={"20vw"}
                  style={{ marginLeft: 25 }}
                />
              </div>

              <Rectangle
                width={"calc(20*2vw + 25*2px)"}
                height={"20vw"}
                color={constants.GOLD}
              />
            </div>

            {/* <TabBar />
          <div className="Centred">
            <h1>
              <MdPlayCircleFilled size="4em" color={pink} />
            </h1>
          </div> */}
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "flex-end"
              }}
            >
              <Square
                src={protagonista.socialImg}
                // text="Comuna 13. El movimiento"
                color={constants.CYAN}
                size={"25vw"}
                fontSize={20}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const TabBar = props => (
  <div
    style={{
      display: "flex",
      // flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      height: "40px"
    }}
  >
    <p class="TabBarItem">{"Documental".toUpperCase()}</p>
    <p class="TabBarItem">{"Protagonistas".toUpperCase()}</p>
  </div>
);

const MovButton = props => <button className="MovButton">{props.mov}</button>;
