import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import MenuAppBar from './components/MenuAppBar';
import ArtistContainer from './containers/ArtistContainer';

// SONGKICK API_KEY:"APm3qeoeRxB2Ixuv"

class App extends Component {
  constructor() {
    super();
    this.state = {events: []};
  }
  componentDidMount() {
    this.props.getEvents();
  }


  
  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <MenuAppBar />
          </header>
          <div>
            <h1> Event Info</h1>
            <ArtistContainer />
          </div>
        </div>
        <div>
          {/* <GoogleMap /> */}
        </div>
      </div>
    );
  }
}

// App.PropTypes = {

// }

export default App;
