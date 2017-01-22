import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
    speechesPreviewInfo: getSpeechesPreviewInfo(state.speechData),
});



const availableSpeeches = connect(
    mapStateToProps
)(SpeechList);

export default availableSpeeches;
