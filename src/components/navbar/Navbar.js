import React from 'react';
import './Navbar.css';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const Navbar = () => (
    <header className="navbar">
        <div className="navbar_container">
            <div className="navbar_inner">
                <div className="navbar_icon">
                    <div>
                        <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                    </div>
                </div>
                <div className="navbar_buttons">
                    <div className="navbar_login">
                        <Button>Log in</Button>
                    </div>
                    <div className="navbar_signup">
                        <Button>Sign up</Button>
                    </div>
                </div>
            </div> 
        </div>
    </header>
);

export default Navbar;
