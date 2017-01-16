import { connect } from 'react-redux';
import { initializePlayback } from '../actions';

import SpeechList from '../components/SpeechList';


//place to add logic for filtering availableSpeeches later
const getSpeechesPreviewInfo = (speechData) => {
    return speechData.speechList.map((speechID) => {
        const { previewIcon, description } = speechData.speeches[speechID];
        return {
            speechID,
            previewIcon,
            description
        };
    });
};

const mapStateToProps = (state) => {
    return {
        speechesPreviewInfo: getSpeechesPreviewInfo(state.speechData),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSpeechClick: (speechID) => {
            dispatch(initializePlayback(speechID, 'https://radio.orange.com/radios/somafm_space_station/streams'));
        }
    }
}

const availableSpeeches = connect(
    mapStateToProps,
    mapDispatchToProps
)(SpeechList);

export default availableSpeeches;
