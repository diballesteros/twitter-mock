import React from 'react'
import styles from './SignUp.module.scss';
import Icon from '../../common/Icon/Icon';
import Input from '../../common/Input/Input';

const SignUp = () => (
    <div className={styles.signup}>
        <div className={styles.icon}>
            <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
        </div> 
        <div className={styles.container}>
            <div className={styles.create}>
                <div className={styles.header}>
                    <span>Create your account</span> 
                </div>
                <div className={styles.field}>
                    <Input type="createuser">Name</Input>
                </div>
                <div className={styles.field}>
                    <Input type="password">Password</Input>
                </div>
            </div>
        </div>
    </div>
);

export default SignUp
