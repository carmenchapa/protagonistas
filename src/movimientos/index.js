import React from "react";
import { Link } from "react-router-dom";
import movimientos from "../data/movimientos";

export default class Movimientos extends React.Component {
  getWidth = () => 3 * (window.innerWidth * 0.28 + 40);
  render() {
    console.log("mov name", movimientos);
    return (
      <div className="AppContainer NabBarAvoiding ListContainer">
        <div className="gridMov">
          {movimientos.map((e, i) => (
            <Movimiento
              key={i}
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

const movimientoContainer = src => {
  return {
    paddingTop: "45%",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6)60%, rgba(0, 0, 0, 0.95)100%),
		url(${src})`,
    backgroundSize: "cover"
  };
};

const Movimiento = props => {
  console.log("mov", props.name);
  return (
    <Link
      className="link"
      to={{ pathname: `/movimientos:${props.name}`, movimiento: props.name }}
    >
      <div style={movimientoContainer(props.src)}>
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
