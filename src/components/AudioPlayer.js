import React, { Component } from 'react';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import '../styles/AudioPlayer.less';

// import throttle from 'lodash.throttle';

//<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

class AudioPlayer extends Component {
    constructor() {
        super();
        this.state = {
            volume: '0.5',
            trackCurrentTime: undefined,
            trackDuration: 0
        }
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleOnTimeUpdate = this.handleOnTimeUpdate.bind(this);
        this.handleSeek = this.handleSeek.bind(this);
        this.parseMetadata = this.parseMetadata.bind(this);
    }
    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    handleVolumeChange(e) {
        this.setState({volume: e.target.value});
        this.audio.volume  = e.target.value;
    }

    handleSeek(e) {
        this.setState({trackCurrentTime: e.target.value})
        this.audio.currentTime = e.target.value;
    }

    handleOnTimeUpdate() {
        this.setState({trackCurrentTime: this.audio.currentTime})
    }

    parseMetadata() {
        this.setState({trackDuration: this.audio.duration});
    }

    formatTimeInSeconds(timeInSeconds) {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = Math.floor(timeInSeconds - (minutes * 60));
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return `${minutes}:${seconds}`
    }

    render() {
        const audioSrc = this.props.src;
        const id = this.props.id || 'default';
        const formattedTime = this.formatTimeInSeconds(this.state.trackCurrentTime);

        return (
            <div className='player'>
                <div className='player__svg-wrapper'>{this.props.logo}</div>
                <audio
                    ref={(audioEl) => this.audio = audioEl }
                    src={audioSrc}
                    onTimeUpdate={this.handleOnTimeUpdate}
                    onLoadedMetadata={this.parseMetadata}
                    autoPlay>
                    Your browser does not support the audio element. Sorry:(
                </audio>
                <button
                    className="player__control-btn player__control-btn--play"
                    type="button"
                    onClick={this.play}
                >
                    <PlayIcon />
                </button>
                <button
                    className="player__control-btn player__control-btn--play"
                    type="button"
                    onClick={this.pause}
                >
                    <PauseIcon />
                </button>
                <input
                    id={id}
                    type="range"
                    value={this.state.volume}
                    onChange={this.handleVolumeChange} min='0' max="1" step='0.01'
                />
                {id !== 'stream' &&
                    <div className='seekbar-wrapper'>
                        <span className='seekbar__timebox'>{formattedTime}</span>
                        <input
                            className='seekbar seekbar__specific'
                            id={id}
                            type='range'
                            min='0'
                            max={this.state.trackDuration}
                            step='3'
                            onChange={this.handleSeek}
                            value={this.state.trackCurrentTime}
                        />
                    <span className='seekbar__timebox'>{this.formatTimeInSeconds(this.state.trackDuration)}</span>
                </div>
                }
            </div>
        );
    }
}

export default AudioPlayer;
