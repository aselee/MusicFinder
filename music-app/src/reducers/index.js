import {combineReducers} from 'redux';

function events(state = [], action){
    if(action.type === "EVENTS_LOADED"){
        console.log("events.value", action);
        return action.value;
    }
    return state;
}

function locations(state = [], action) {
    if(action.type ==="LOCATIONS_LOADED") {
        return action.value;
    }
    return state;
}

const rootReducer = combineReducers({
    events, locations
});

export default rootReducer;