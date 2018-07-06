import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import store from './store';
// import mongoose from 'mongoose';

ReactDOM.render(
    <Provider store={store}><AppContainer /></Provider>, 
    document.getElementById('root')
    );


// calling the database
let express = require("express");
let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://musicuser:Musicuser8919@ds129821.mlab.com:29821/music-project");
const app = express()

// using routes
let saveRoutes = require("./Routes/saveRoutes");
app.use(saveRoutes);


let Save = require("./Models/saveModel");
Save.find({}).exec()
.then(saves => {
    console.log(saves);
});



// calling server
app.listen(2222, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now live on 2222");
    });
