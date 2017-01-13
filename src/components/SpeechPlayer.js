import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import '../styles/SpeechPlayer.less';



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
        if (document.getElementById('stream')) {
            document.getElementById('stream').volume = 0.2;
        }
        return (
            <div>
                {
                    !audioSrc && <div>Loading</div>
                }
                {
                    audioSrc &&
                    <div className="speech-player">
                        <ul className="speech-player__slideshow">
                            {
                                info.map((info, index) => {
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
                                })
                            }
                        </ul>
                        <audio src={audioSrc} controls autoPlay>Your browser does not support the audio element. Sorry:( </audio>
                        <audio id="stream" src={currentRadioStream} controls autoPlay>Your browser does not support the audio element. Sorry:( </audio>
                    </div>
                }
            </div>
        );
    }
}



export default connect(mapStateToProps)(SpeechPlayer);
