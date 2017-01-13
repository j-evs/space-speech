import { connect } from 'react-redux';
import { testAsync } from '../actions';

import SpeechList from '../components/SpeechList';


//place to add logic for filtering availableSpeeches later
const getVisibleSpeeches = (speeches) => {
    return speeches;
};

const mapStateToProps = (state) => {
    return {
        speeches: getVisibleSpeeches(state.speechData.availableSpeeches),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSpeechClick: (index) => {
            dispatch(testAsync(index, 'https://radio.orange.com/radios/somafm_space_station/streams'));
        }
    }
}

const availableSpeeches = connect(
    mapStateToProps,
    mapDispatchToProps
)(SpeechList);

export default availableSpeeches;
