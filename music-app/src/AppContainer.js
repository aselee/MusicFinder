import App from './App';
import './App.css';
import { connect } from 'react-redux';
import { fetchEvents, onFormSubmit } from './actions';


function mapDispatchToProps(dispatch) {
    return {
      getEvents() {
          const action = fetchEvents();
          dispatch(action)
      },
      submitEvent(e) {
        e.preventDefault();
        debugger;
        const action = onFormSubmit();
        dispatch(action)
      }

    };
}

export default connect(null,mapDispatchToProps)(App);
