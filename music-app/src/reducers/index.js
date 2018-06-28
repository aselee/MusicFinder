import {combineReducers} from 'redux';

// function artists(state = [], action) {
//     return state;
// }

function artists(state = [], action){
    if(action.type === "ARTISTS_LOADED"){
        return action.value;
    }
    if(action.type)
    return state;
}

const rootReducer = combineReducers({
    artists
});

export default rootReducer;