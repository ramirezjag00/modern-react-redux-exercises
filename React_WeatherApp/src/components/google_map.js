import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		//how to create an embedded google map
		//find the refs.map html and render google map
		//2nd argument is object with properties for the modification of the map
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	render() {
		// this.refs.map
		//ref system in react, which allows us to make reference html that has been rendered to the page
		return <div ref="map" />;
	}
}

export default GoogleMap;
//============
//another version
//============
// import React, { Component } from 'react';
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

// export default (props) => {
// 	return (
// 		<GoogleMapLoader
// 			containerElement={ <div style={{height: '100%'}} /> }
// 			googleMapElement={
// 				<GoogleMap defaultZoom= {12} defaultCenter{{last:props.lat, lng:props.lon}}/>
// 			}
// 		/>
// 	);
// }