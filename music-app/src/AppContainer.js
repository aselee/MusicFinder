import App from './App';
import './App.css';
import { connect } from 'react-redux';
// import {fetchArtists} from './actions';
import {fetchEvents} from './actions';


function mdp(dispatch) {
    return {
      getEvents() {
          const action = fetchEvents();
          dispatch(action)
      }

    };
}

export default connect(null,mdp)(App);
