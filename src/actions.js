import parsers from 'playlist-parser';
let playlistParser = parsers.PLS;

import * as api from './api';

//action constants
export const SELECT_SPEECH = 'SELECT_SPEECH';
export const GET_STREAM = 'GET_STREAM';
export const RECIEVED_STREAM = 'RECIEVED_STREAM';
export const FETCHING_SPEECHDATA = 'FETCHING_SPEECHDATA';
export const RECEIVED_SPEECHDATA = 'RECEIVED_SPEECHDATA';



// export function selectSpeech(speechID) {
//     return {
//         type: SELECT_SPEECH,
//         speechID
//     }
// }

//async action (maybe need thunk middleware)
export function getAudioStream() {
    return {
        type: GET_STREAM
    }
}

export function recieveAudioStream(radioStreamURL) {
    return {
        type: RECIEVED_STREAM,
        url: radioStreamURL
    }
}

export function requestSpeechData() {
    return {
        type: FETCHING_SPEECHDATA
    }
}

export function receiveSpeechData(speechData) {
    return {
        type: RECEIVED_SPEECHDATA,
        speechData
    }
}

export function initializePlayback(speechID, radioPlaylistRequestURL) {
    return dispatch => {
        dispatch(getAudioStream());
        return fetch('https://somafm.com/spacestation.pls')
            .then(response => response.text())
            .then(text => playlistParser.parse(text))
            .then(playListinfo => dispatch(recieveAudioStream(playListinfo[0].file)))
    }
}

export function getSpeechData() {
    return dispatch => {
        dispatch(requestSpeechData());
        return api.fetchSpeechData()
            .then(speechData => dispatch(receiveSpeechData(speechData)));
    }
}
