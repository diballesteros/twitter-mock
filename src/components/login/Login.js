import React, { Component } from 'react';
import './Login.css';
import Navbar from '../navbar/Navbar';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <Navbar />
            </div>
        );
    };
}

export default Login;
