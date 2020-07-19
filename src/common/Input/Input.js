import React from 'react';
import styles from './Input.module.scss';

const Input = ({type, value, handleChange, maxlength, children}) => (
    <label className={styles.input}>
        <div className={styles.container}>
            <label htmlFor={children} className={styles.text}>{children}</label>
            <div className={styles.value}>
                <input maxLength={maxlength} type={type} id={children} value={value} onChange={e => handleChange(e.target.value)}/>
            </div>
        </div>
    </label>
);

export default Input;
