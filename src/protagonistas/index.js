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

const protaContainer = src => {
  return {
    paddingTop: "100%",
    backgroundImage: `url(${src})`,
    backgroundSize: "cover"
  };
};

const Prota = props => (
  <Link
    className="link"
    to={{
      pathname: `/protagonistas:${props.name}`,
      protagonista: props.name
    }}
  >
    <div>
      <div style={protaContainer(props.src)} />
      <p className="ProtagonistaName">{props.name.toUpperCase()}</p>
      <p className="ProtagonistaDescription">{props.description}</p>
    </div>
  </Link>
);
