import React from 'react';
import styles from './Input.module.scss';

const Input = ({type, children}) => (
    <label className={styles.input}>
        <div className={styles.container}>
            <div className={styles.text}>{children}</div>
            <div className={styles.value}>
                <input type={type === 'password' ? type : 'text'} id={`${type}_login`}/>
            </div>
        </div>
    </label>
);

export default Input;
