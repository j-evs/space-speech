import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Spinner from './Spinner';
import '../styles/App.less';

import { getSpeechData } from '../actions';

const mapStateToProps = (state) => ({
    isLoading: state.speechData.isLoading
});

class App extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getSpeechData());
    }

    render() {
        const { isLoading } = this.props;
        return (
            <div>
                {isLoading ? <Spinner /> : this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(App);
