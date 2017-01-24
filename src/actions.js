import parsers from 'playlist-parser';
let playlistParser = parsers.PLS;

import * as api from './api';

//action constants
export const SELECT_SPEECH = 'SELECT_SPEECH';
export const GET_STREAM = 'GET_STREAM';
export const RECEIVED_STREAM = 'RECIEVED_STREAM';
export const FETCHING_SPEECHDATA = 'FETCHING_SPEECHDATA';
export const RECEIVED_SPEECHDATA = 'RECEIVED_SPEECHDATA';


export const getAudioStream = () => ({
    type: GET_STREAM
});


export const recieveAudioStream = (radioStreamURL) => ({
    type: RECEIVED_STREAM,
    url: radioStreamURL
});


export const requestSpeechData = () => ({
    type: FETCHING_SPEECHDATA
}) ;

export const receiveSpeechData = (speechData) => ({
    type: RECEIVED_SPEECHDATA,
    speechData
});

export const initializePlayback = (speechID, radioPlaylistRequestURL) => {
    return dispatch => {
        dispatch(getAudioStream());
        return fetch('https://somafm.com/spacestation.pls')
            .then(response => response.text())
            .then(text => playlistParser.parse(text))
            .then(playListinfo => dispatch(recieveAudioStream(playListinfo[0].file)))
    }
};

export const getSpeechData = () => {
    return dispatch => {
        dispatch(requestSpeechData());
        return api.fetchSpeechData()
            .then(speechData => dispatch(receiveSpeechData(speechData)));
    }
};
