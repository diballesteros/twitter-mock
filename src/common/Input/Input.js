import React from 'react';
import styles from './Input.module.scss';

const Input = ({ type, forwardedRef, maxlength, value, handleChange, children }) => (
    <label className={styles.input}>
        <div className={styles.container}>
            <label className={styles.text}>{children}</label>
            <div className={styles.value}>
                <input maxLength={maxlength} type={type} ref={forwardedRef} value={value} onChange={handleChange ? e => handleChange(e.target.value) : () => void 0}/>
            </div>
        </div>
    </label>
);

export default Input;
