import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from './Spinner';
import '../styles/App.less';

import { getSpeechData } from '../actions';

const mapStateToProps = (state) => {
    console.log('Parent mapStateToProps called');
    console.log('isLoading state: ', state.speechData.isLoading);
    return {
        isLoading: state.speechData.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSpeeches: function() {
            dispatch(getSpeechData());
        }
    };
};

class App extends Component {
    componentWillMount() {
        console.log('firing async action in Parent componentWillMount');
        this.props.getSpeeches();
    }


    render() {
        console.log('-------------Parent component rendered with isLoading prop: ', this.props.isLoading, '----------');
        if (this.props.isLoading) {
            return <Spinner />
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
