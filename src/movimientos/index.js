import React from "react";
import { Link } from "react-router-dom";
import movimientos from "../data/movimientos";

export default class Movimientos extends React.Component {
  getWidth = () => 3 * (window.innerWidth * 0.28 + 40);
  render() {
    console.log("mov name", movimientos);
    return (
      <div className="AppContainer NabBarAvoiding ListContainer">
        <div style={{ ...gridStyle, maxWidth: `${this.getWidth()}px` }}>
          {movimientos.map((e, i) => (
            <Movimiento
              key={i}
              width={"28vw"}
              height={"20vw"}
              name={e.name}
              src={e.img}
              description={e.shortText}
            />
          ))}
        </div>
      </div>
    );
  }
}

const gridStyle = {
  display: "flex",
  // maxWidth: '1200px',
  margin: "0 auto",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap"
};

const movimientoContainer = (width, height, src) => {
  return {
    display: "flex",
    width: width,
    height: height,
    overflow: "hidden",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6)60%, rgba(0, 0, 0, 0.95)100%),
		url(${src})`,
    backgroundSize: "contain",
    margin: 20,
    alignItems: "flex-end"
  };
};

const Movimiento = props => {
  console.log("mov", props.name);
  return (
    <Link
      className="link"
      to={{ pathname: `/movimientos:${props.name}`, movimiento: props.name }}
    >
      <div style={movimientoContainer(props.width, props.height, props.src)}>
        <div style={{ flexDirection: "row", margin: 10, color: "var(--gold)" }}>
          <p className="ProtagonistaName">
            {props.name.toString().toUpperCase()}
          </p>
          <p className="ProtagonistaDescription" style={{ color: "OldLace" }}>
            {props.description.toString().toUpperCase()}
          </p>
        </div>
      </div>
    </Link>
  );
};
