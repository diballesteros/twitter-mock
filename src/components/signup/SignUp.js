import React, { useState, useRef } from 'react'
import styles from './SignUp.module.scss';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const SignUp = ({ createNewUser }) => {
    const newName = useRef('');
    const newUsername = useRef('');
    const newPassword = useRef('');

    return (
        <div className={styles.signup}>
            <div className={styles.container}>
                <div className={styles.create}>
                    <div className={styles.header}>
                        <span>Create your account</span>
                    </div>
                    <div>
                        <div className={styles.field}>
                            <Input type="text" forwardedRef={newName} maxlength={50}>Name</Input>
                        </div>
                        <div className={styles.nameCount}>
                            <span>{` / 50`}</span>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <Input type="text" forwardedRef={newUsername} maxlength={20}>Username</Input>
                    </div>
                    <div className={styles.field}>
                        <Input type="password" forwardedRef={newPassword} maxlength={20}>Password</Input>
                    </div>
                    <div className={styles.button}>
                        <Button clicked={() => createNewUser(newName.current.value, newUsername.current.value, newPassword.current.value)}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SignUp
