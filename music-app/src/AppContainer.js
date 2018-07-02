import App from './App';
import './App.css';
import { connect } from 'react-redux';
import { fetchEvents } from './actions';


function mapDispatchToProps(dispatch) {
    return {
      getEvents() {
          const action = fetchEvents();
          dispatch(action)
      }

    };
}

export default connect(null,mapDispatchToProps)(App);
