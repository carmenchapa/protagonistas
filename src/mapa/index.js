import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Link } from "react-router-dom";
import protas from "../data/protagonistas";
import { capitalizeFirst } from "../utils/helperFunctions";

class Mapa extends React.Component {
  state = {
    // stores: protas.map(e => e.geo),
    prota: null
  };

  displayMarkers = () => {
    return protas.map((prota, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: prota.geo.latitude,
            lng: prota.geo.longitude
          }}
          onClick={() => this.setState({ prota: prota })}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 6.255369, lng: -75.622766 }}
        >
          {this.displayMarkers()}
        </Map>
        {this.state.prota && <PopUp prota={this.state.prota} />}
      </div>
    );
  }
}

const PopUp = props => (
  <Link
    className="link"
    to={{
      pathname: `/protagonistas:${props.prota.name}`,
      protagonista: props.prota.name
    }}
  >
    <div style={popupStyles}>
      <img
        src={props.prota.img}
        height="80%"
        width="100%"
        alt=""
        style={{ objectFit: "cover" }}
      />
      <div>
        <p className="PopupName">{capitalizeFirst(props.prota.name)}</p>
        <p className="Text">{props.prota.shortText}</p>
      </div>
    </div>
  </Link>
);

const mapStyles = {
  width: "100%",
  height: "100%"
};

const popupStyles = {
  position: "fixed",
  padding: "20px",
  top: "calc(50vh - (60vh / 2))",
  left: "calc(50vw - (45vh / 2))",
  width: "45vh",
  height: "60vh",
  background: "var(--smokeWhite)"
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(Mapa);
