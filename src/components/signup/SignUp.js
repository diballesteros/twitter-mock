import React from 'react'
import './SignUp.css';
import Icon from '../icon/Icon';
import Input from '../input/Input';

const SignUp = () => (
    <div className="signup">
        <div className="signup_icon">
            <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
        </div> 
        <div className="signup_container">
            <div className="signup_create">
                <div className="signup_header">
                    <span>Create your account</span> 
                </div>
                <div className="signup_field">
                    <Input type="createuser">Name</Input>
                </div>
                <div className="signup_field">
                    <Input type="password">Password</Input>
                </div>
            </div>
        </div>
    </div>
);

export default SignUp
