import React from 'react';
import Button from '../../../common/Button/Button';
import Icon from '../../../common/Icon/Icon';
import Option from '../../Option/Option';
import './Header.css';

const Header = () => (
    <header className="header">
        <div>
            <div>
                <div className="header_home-button">
                    <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                </div>
                <div>
                    <Option type="home">Home</Option>
                    <Option type="message">Messages</Option>
                    <Option type="profile">Profile</Option>
                </div>
                <div className="header_button-container">
                    <Button>Tweet</Button>
                </div>
            </div>
            <div className="header_button-container ">
                <Button>Log Out</Button>
            </div>
        </div>
    </header>
);

export default Header;
