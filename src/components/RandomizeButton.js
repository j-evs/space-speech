import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializePlayback } from '../actions';

import '../styles/RandomizeButton.less';

const mapStateToProps = (state) => {
    return {
        speechList: state.speechData.speechList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectRandomSpeech: function() {
            const { speechList } = this.props;
            let randomSpeechIndex = Math.floor(Math.random() * speechList.length);
            let randomSpeechID = speechList[randomSpeechIndex];
            dispatch(initializePlayback(randomSpeechID, 'https://radio.orange.com/radios/somafm_space_station/streams'));
            this.props.router.push(`/listen/${randomSpeechID}`);
        }
    };
}

class RandomizeButton extends Component {
    render() {
        return <button className="randomize-button" onClick={this.props.selectRandomSpeech.bind(this)}>Start listening right away! </button>
    }
}

// RandomizeButton.propTypes = {
//     onClick: PropTypes.func.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeButton);
