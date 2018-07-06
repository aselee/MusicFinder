// import ReactDOM from 'react-dom'

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Map(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
 
        </CardContent>
      </Card>
    </div>
  );
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);


// export class Map extends React.Component {

    // componentDidUpdate(prevProps, prevState){
    //     if (prevProps.google !== this.props.google) {
    //         this.loadMap();
    //     }
    // }
    // loadMap(){
    //     if (this.props && this.props.google) {
    //         const{google} = this.props;
    //         const maps = google.maps;

    //         const mapRef = this.refs.map;
    //         const node = ReactDOM.findDOMNode(mapRef);

    //         let zoom = 14;
    //         let lat = 37.774929;
    //         let lng = -122.419416
    //         const center = new maps.LatLng(lat,lng);
    //         const mapConfig = Object.assign({}, {
    //             center: center,
    //             zoom: zoom
    //         })
    //         this.map = new maps.Map(node, mapConfig);
    //     }
    // }

//     render() {
//       return (
//         <div ref='map'>
//           Loading map...
//         </div>
//       )
//     }
//   }

//   export default Map;

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