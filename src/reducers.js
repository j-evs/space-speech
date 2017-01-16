import { combineReducers } from 'redux';
import { RECIEVED_STREAM } from './actions';


function speechSelector(state = {
    availableSpeeches: [],
    currentSpeech: ''
}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function currentRadioStream(state = '', action) {
    switch (action.type) {
        case RECIEVED_STREAM:
            return action.url;
        default:
            return state;
    }
}


export default combineReducers({
    speechData: speechSelector,
    currentRadioStream: currentRadioStream
});
