import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/Intro.less';

import RandomizeButton from './RandomizeButton';

export default class Intro extends Component {
    render() {
        console.log('Child component rendered');
        return (
            <div className="intro-wrapper">
                <div className="intro-container">
                    <div className="intro">
                        <h1 className="intro__header">Space Speech</h1>
                        <div className="intro__promo">
                            <p className="intro__description">Experience the most dramatic events of XX century from another perspective</p>
                            <p className="intro__description">Enjoy listening to famous speakers of the past together with a fine selection of ambient-music</p>
                        </div>
                        <div className="intro__selection">
                            <Link className="intro__link" to='/library'>Browse our library of speeches</Link>
                            <p className="intro__description">OR</p>
                            <RandomizeButton router={this.props.router}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
