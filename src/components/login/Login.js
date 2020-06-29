import React, { Component } from 'react';
import './Login.css';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import Input from '../input/Input';
import Modal from '../modal/Modal';
import SignUp from '../signup/SignUp';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <main className="login">
                <div className="login_container">
                    <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                    <h1>Log in to Pandi</h1>
                    <form className="login_form">
                        <div className="login_field">
                            <Input type="username">Username</Input>
                        </div>
                        <div className="login_field">
                            <Input type="password">Password</Input>
                        </div>
                        <div className="login_button login_field">
                            <Button>Log in</Button> 
                        </div>
                        <div className="login_button login_field">
                            <Button>Sign up</Button>
                        </div>
                    </form>
                </div>
                <Modal show={false}>
                    <SignUp />
                </Modal>
            </main>
        );
    };
}

export default Login;
