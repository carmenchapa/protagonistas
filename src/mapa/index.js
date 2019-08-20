import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Mapa extends React.Component {
	state = {
		stores: [{ latitude: 6.255369, longitude: -75.622766},
						// {latitude: 47.359423, longitude: -122.021071},
						// {latitude: 47.2052192687988, longitude: -121.988426208496},
						// {latitude: 47.6307081, longitude: -122.1434325},
						// {latitude: 47.3084488, longitude: -122.2140121},
						{ latitude: 6.215369, longitude: -75.623366}]
	}

	displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
		return (
			<div >
				<Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 6.255369, lng: -75.622766}}
        >
					{this.displayMarkers()}
				</Map>
			</div>
			)
  }
}

const mapStyles = {
  width: '100%',
  height: '100%',
};


export default GoogleApiWrapper({
	apiKey: ''
})(Mapa);