import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            /*important: we could write return state.push(action.payload.data)
            but we won't because we should never mutate state directly. Instead of
            doing that, we will return a new state containing old state and the new
            data. This is true for react component state too.*/
            // concat creates a new state with old data and the new one
            // return state.concat([action.payload.data]); // < ES6
            return [action.payload.data, ...state]; // >= ES6
    }
    return state;
}