import { connect } from 'react-redux';
import Map from '../components/Map';

function mapStateToProps(state) {
    // console.log(state)
    return {
        location: state.locations
    };
}

export default connect(mapStateToProps)(Map);

// export class Container extends React.Component {
//     render() {
//         const style = {
//             width: '100vw',
//             height: '100vh'
//           }

//       return(
//           <div>
//             <Map google={this.props.google} />
//           </div>
//       )
//     }
//   }
  
//   export default GoogleApiComponent({
//     apiKey: AIzaSyA5EQG52zu9Crfxfs7aMxkMLQvuHa_ntO4
//   })(Container)

