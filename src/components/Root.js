import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import App from './App';
import Intro from './Intro';
import AvailableSpeeches from '../containers/AvailableSpeeches';
import SpeechPlayer from './SpeechPlayer';

let store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Intro} />
                        <Route path='/library' component={AvailableSpeeches} />
                        <Route path='/listen/:speechID' component={SpeechPlayer} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
