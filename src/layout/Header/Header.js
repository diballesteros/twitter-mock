import React from 'react';
import Button from '../../common/Button/Button';
import Icon from '../../common/Icon/Icon';
import Option from '../../components/Option/Option';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div>
            <div>
                <div className={styles.homeButton}>
                    <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                </div>
                <div>
                    <Option type="home">Home</Option>
                    <Option type="message">Messages</Option>
                    <Option type="profile">Profile</Option>
                </div>
                <div className={styles.button}>
                    <Button>Tweet</Button>
                </div>
            </div>
            <div className={styles.button}>
                <Button>Log Out</Button>
            </div>
        </div>
    </header>
);

export default Header;
