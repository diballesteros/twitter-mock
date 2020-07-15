import React from 'react';
import Icon from '../../common/Icon/Icon';
import styles from './Option.module.scss';

const Option = ({type, children}) => (
    <a className={styles.option} href="/#">
        <div>
            <div className={styles.icon}>
                <Icon group="OPTIONS" icon={type} width="26" height="26" color="#14171a" />
            </div>
            <div className={styles.text}>
                {children}
            </div>
        </div>
    </a>
);

export default Option;