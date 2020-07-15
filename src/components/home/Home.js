import React from 'react';
import Icon from '../../common/Icon/Icon';
import styles from './Home.module.scss';

const Home = () => (
    <div className={styles.home}>
        <h2>Home</h2>
        <Icon group="GENERAL" icon="star" width="40" height="40" color="#1da1f2"/>
    </div>
);

export default Home;
