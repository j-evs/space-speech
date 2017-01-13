import { combineReducers } from 'redux';
import { SELECT_SPEECH, RECIEVED_STREAM } from './actions';


function speechSelector(state = {
    availableSpeeches: [],
    currentSpeech: ''
}, action) {
    switch (action.type) {
        case SELECT_SPEECH:
            return Object.assign({}, state, {
                currentSpeech: Object.assign({}, state.availableSpeeches[action.index])
            });
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
