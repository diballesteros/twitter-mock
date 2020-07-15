import React from 'react';
import styles from'./Button.module.scss';

const Button = ({children, clicked}) => (
    <div className={styles.container} onClick={clicked}>
        <span>{children}</span>
    </div>
);

export default Button;