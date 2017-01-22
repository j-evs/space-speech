import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializePlayback } from '../actions';
import AudioPlayer from './AudioPlayer';

import '../styles/SpeechPlayer.less';

import speechAudioIcon from '../media/img/icons/speech.svg';
import streamAudioIcon from '../media/img/icons/radio-stream.svg';


const mapStateToProps = (state, ownProps) => {
    return {
        currentSpeech: state.speechData.speeches[ownProps.params.speechID],
        currentRadioStream: state.currentRadioStream
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initializePlayback: function() {
            dispatch(initializePlayback(ownProps.params.speechID))
        }
    };
}

class SpeechPlayer extends Component {
    componentDidMount() {
        this.props.initializePlayback();
    }
    render() {

        console.log('Speechplayer rendered');

        const { audioSrc, info } = this.props.currentSpeech;
        const { currentRadioStream } = this.props;
        const animationDelaySeconds = 60;
        //if (document.getElementById('stream')) {
        //    document.getElementById('stream').volume = 0.2;
        //}

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
            <div>
                {
                    !audioSrc && <div>Loading</div>
                }
                {
                    audioSrc &&
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
                }
            </div>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(SpeechPlayer);
