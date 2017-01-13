import React from 'react';
//import logo from '../logo.svg';

//styles
//import '../App.less';
//import styles from '../Modules.css';

//my stuff

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


export default App;
