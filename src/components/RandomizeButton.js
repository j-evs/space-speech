import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchRadioStream } from '../actions';

import '../styles/RandomizeButton.less';

const mapStateToProps = (state) => {
    return {
        availableSpeechesIDs: state.speechData.availableSpeeches.map(speech => speech.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectRandomSpeech: function() {
            let randomSpeechIndex = Math.floor(Math.random() * this.props.availableSpeechesIDs.length);
            dispatch(fetchRadioStream(randomSpeechIndex, 'https://radio.orange.com/radios/somafm_space_station/streams'));
            this.props.router.push(`/listen/${this.props.availableSpeechesIDs[randomSpeechIndex]}`);
        }
    }
}

class RandomizeButton extends Component {
    render() {
        return <button className="randomize-button" onClick={this.props.selectRandomSpeech.bind(this)}>Start listening right away! </button>
    }
}

RandomizeButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeButton);
