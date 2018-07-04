import React from 'react'
import ReactDOM from 'react-dom'

export class Map extends React.Component {

    componentDidUpdate(prevProps, prevState){
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }
    loadMap(){
        if (this.props && this.props.google) {
            const{google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416
            const center = new maps.LatLng(lat,lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
      return (
        <div ref='map'>
          Loading map...
        </div>
      )
    }
  }

  export default Map;

// import React from 'react';
// import {
// Map,
// GoogleApiWrapper,
// Marker,
// InfoWindow
// } from 'google-maps-react';
 
 
// export class Map extends React.Component {

//     render() {
//         return(
//             <Map google={this.props.google} zoom={14}>

//               <Marker onClick={this.onMarkerClick}
//                 name={'Current Location'} />

//               <InfoWindow onClose={this.onInfoWindowClose}>
//                 <div>
//                     <h1>{this.state.selectPlace.name}</h1>
//                 </div>
//               </InfoWindow>
//             </Map>
//         );
//     }

// }
 
// export default GoogleApiWrapper({
//   apiKey: (AIzaSyA5EQG52zu9Crfxfs7aMxkMLQvuHa_ntO4)
// })(Map)