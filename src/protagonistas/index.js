import React from "react";
import { Link } from "react-router-dom";
import protas from "../data/protagonistas";

export default class Protagonistas extends React.Component {
  getWidth = () => 4 * (window.innerWidth * 0.2 + 40);

  render() {
    return (
      <div
        className="AppContainer NabBarAvoiding ProtasContainer"
        style={{ alignContent: "center" }}
      >
        <div style={{ ...gridStyle, maxWidth: `${this.getWidth()}px` }}>
          {protas.map((e, i) => (
            <Prota
              key={i}
              size={"20vw"}
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
  whiteSpace: "nowrap",
  margin: "0 auto",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap"
};

// var d= $('div');
// var w;

// d.children().each(function(){
//  w = w + $(this).outerWidth();
//  d.css('width', w + 'px')
// });

const Prota = props => (
  <Link
    className="link"
    to={{
      pathname: `/protagonistas:${props.name}`,
      protagonista: props.name
    }}
  >
    <div
      style={{ flexDirection: "colum", margin: 20, alignSelf: "flex-start" }}
    >
      <div
        className="Centred"
        style={{ width: props.size, height: props.size, overflow: "hidden" }}
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
