import {combineReducers} from 'redux';

// function artists(state = [], action) {
//     return state;
// }

function events(state = [], action){
    if(action.type === "EVENTS_LOADED"){
        console.log("events.value", action);
        return action.value;
    }
    return state;
}

const rootReducer = combineReducers({
    events
});

export default rootReducer;