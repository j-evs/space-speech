import FormData from 'form-data';
import parsers from 'playlist-parser';
let playlistParser = parsers.PLS;
//action constants
export const SELECT_SPEECH = 'SELECT_SPEECH';
export const GET_STREAM = 'GET_STREAM';
export const RECIEVED_STREAM = 'RECIEVED_STREAM';



export function selectSpeech(index) {
    return {
        type: SELECT_SPEECH,
        index
    }
}


//async action (maybe need thunk middleware)
export function getAudioStream() {
    return {
        type: GET_STREAM
    }
}

export function recieveAudioStream(streamSrc) {
    return {
        type: RECIEVED_STREAM,
        url: streamSrc
    }
}

export function testAsync(index, requestURL) {
    return dispatch => {
        dispatch(getAudioStream());
        dispatch(selectSpeech(index));
        return fetch('https://somafm.com/spacestation.pls')
            .then(response => response.text())
            .then(text => playlistParser.parse(text))
            .then(playListinfo => dispatch(recieveAudioStream(playListinfo[0].file)))
    }
}
