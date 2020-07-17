import React from 'react';
import styles from'./Button.module.scss';

const Button = ({children, clicked, disabled}) => (
    <div className={`${styles.container} ${disabled ? styles.disabled : ''}`} onClick={disabled ? null : clicked}>
        <span>{children}</span>
    </div>
);

export default Button;