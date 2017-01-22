import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { initializePlayback } from '../actions';
import AudioPlayer from './AudioPlayer';

import '../styles/SpeechPlayer.less';

import speechAudioIcon from '../media/img/icons/speech.svg';
import streamAudioIcon from '../media/img/icons/radio-stream.svg';

const mapStateToProps = (state, ownProps) => ({
    currentSpeech: state.speechData.speeches[ownProps.params.speechID],
    currentRadioStream: state.currentRadioStream
});

class SpeechPlayer extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const { speechID } = this.props.params;
        dispatch(initializePlayback(speechID));
    }

    render() {
        const { currentRadioStream } = this.props;
        const { audioSrc, info } = this.props.currentSpeech;
        const animationDelaySeconds = 60;
        const slideShowContents = info.map((info, index) => {
            let animationDelay = `${( index * animationDelaySeconds)}s`;
            return (
                <li>
                    <span
                        className='speech-player__image'
                        style={{
                            backgroundImage: `url(${info.picture})`,
                            animationDelay
                        }}
                        alt='text'
                    >
                        Picture
                    </span>
                    <p
                        className="speech-player__description"
                        style={{
                            animationDelay
                        }}
                        >
                        {info.description}
                    </p>
                </li>
            );
        });

        return (
            <div className="speech-player">
                <ul className="speech-player__slideshow">
                    {slideShowContents}
                </ul>
                <div className='audio-players-wrapper'>
                    <AudioPlayer
                        className="speech-player__audio-player"
                        src={audioSrc}
                        logo={speechAudioIcon}
                    />
                    <AudioPlayer
                        className="speech-player__audio-player"
                        src={currentRadioStream}
                        id='stream'
                        logo={streamAudioIcon}
                    />
                </div>
            </div>
        );
    }
}

SpeechPlayer.propTypes = {
    currentSpeech: PropTypes.object.isRequired,
    currentRadioStream: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(SpeechPlayer);
