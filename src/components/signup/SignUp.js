import React from 'react'
import styles from './SignUp.module.scss';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const SignUp = () => (
    <div className={styles.signup}>
        <div className={styles.container}>
            <div className={styles.create}>
                <div className={styles.header}>
                    <span>Create your account</span> 
                </div>
                <div>
                    <div className={styles.field}>
                        <Input type="text">Name</Input>
                    </div>
                </div>
                <div className={styles.field}>
                    <Input type="text">Username</Input>
                </div>
                <div className={styles.field}>
                    <Input type="password">Password</Input>
                </div>
                <div className={styles.button}>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div>
    </div>
);

export default SignUp
