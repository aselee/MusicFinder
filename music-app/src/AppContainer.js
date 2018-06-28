import App from './App';
import './App.css';
import { connect } from 'react-redux';
import {fetchArtists} from './actions';

function mdp(dispatch) {
    return {
      getArtists() {
          const action = fetchArtists();
          dispatch(action)
      }

    };
}

export default connect(null,mdp)(App);