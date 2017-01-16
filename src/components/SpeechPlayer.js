import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';

import '../styles/SpeechPlayer.less';

import SpeechAudioIcon from './icons/SpeechAudioIcon';
import StreamAudioIcon from './icons/StreamAudioIcon';

const mapStateToProps = (state) => {
    return {
        currentSpeech: state.speechData.currentSpeech,
        currentRadioStream: state.currentRadioStream
    };
}

class SpeechPlayer extends Component {
    render() {
        const { audioSrc, info } = this.props.currentSpeech || {
            audioSrc: undefined,
            pictures: undefined,
            info: undefined
        };
        const { currentRadioStream } = this.props || '';
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
                                logo={<SpeechAudioIcon />}
                            />
                            <AudioPlayer
                                className="speech-player__audio-player"
                                src={currentRadioStream}
                                id='stream'
                                logo={<StreamAudioIcon />}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}



export default connect(mapStateToProps)(SpeechPlayer);
