import { combineReducers } from 'redux';
import { RECEIVED_STREAM, RECEIVED_SPEECHDATA } from './actions';

// const initialState = {
//         speechData: {
//             speechList: getSpeechList(speeches),
//             speeches,
//         },
//         currentRadioStream: undefined
// }

const getSpeechList = (speeches) => {
    return Object.keys(speeches);
}

function createSpeechList(state = [], action) {
    switch (action.type) {
        case RECEIVED_SPEECHDATA:
            return getSpeechList(action.speechData);
        default:
            return state;
    }
}

function importSpeechData(state = {}, action) {
    switch (action.type) {
        case RECEIVED_SPEECHDATA:
            return action.speechData
        default:
            return state;
    }
}

function currentRadioStream(state = '', action) {
    switch (action.type) {
        case RECEIVED_STREAM:
            return action.url;
        default:
            return state;
    }
}

const speechData = combineReducers({
    speechList: createSpeechList,
    speeches: importSpeechData
});


export default combineReducers({
    speechData,
    currentRadioStream
});
