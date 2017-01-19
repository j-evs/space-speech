import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.less';

import { getSpeechData } from '../actions';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpeeches: function() {
            dispatch(getSpeechData());
        }
    };
};

class App extends Component {
    componentWillMount() {
        this.props.getSpeeches();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
