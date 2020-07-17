import React from 'react';
import styles from './Input.module.scss';

const Input = ({type, children}) => (
    <label className={styles.input}>
        <div className={styles.container}>
            <label htmlFor={children} className={styles.text}>{children}</label>
            <div className={styles.value}>
                <input type={type} id={children} />
            </div>
        </div>
    </label>
);

export default Input;
