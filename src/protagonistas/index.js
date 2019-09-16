import React from "react";
import { Link } from "react-router-dom";
import protas from "../data/protagonistas";

export default class Protagonistas extends React.Component {
  getWidth = () => 4 * (window.innerWidth * 0.2 + 40);

  render() {
    return (
      <div
        className="AppContainer NabBarAvoiding ProtasContainer ListContainer"
        style={{ alignContent: "center" }}
      >
        <div className="grid">
          {protas.map((e, i) => (
            <Prota
              className="gridElement"
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

const Prota = props => (
  <Link
    className="link"
    to={{
      pathname: `/protagonistas:${props.name}`,
      protagonista: props.name
    }}
  >
    <div style={{ flexDirection: "colum", alignSelf: "flex-start" }}>
      <div
        className="Centred"
        style={{
          width: "100%",
          height: 300,
          overflow: "hidden"
        }}
      >
        <img
          src={props.src}
          height="100%"
          width="100%"
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="ProtagonistaName">{props.name.toUpperCase()}</p>
      <p className="ProtagonistaDescription">{props.description}</p>
    </div>
  </Link>
);
