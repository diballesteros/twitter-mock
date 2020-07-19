import React from 'react'
import styles from './SignUp.module.scss';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const SignUp = ({ newUser, handleNewUser }) => (
    <div className={styles.signup}>
        <div className={styles.container}>
            <div className={styles.create}>
                <div className={styles.header}>
                    <span>Create your account</span>
                </div>
                <div>
                    <div className={styles.field}>
                        <Input type="text" value={newUser.name} handleChange={(newName) => handleNewUser(newName, 'name')} maxlength={50}>Name</Input>
                    </div>
                    <div className={styles.nameCount}>
                        <span>{`${newUser.name.length} / 50`}</span>
                    </div>
                </div>
                <div className={styles.field}>
                    <Input type="text" value={newUser.username} handleChange={(newUsername) => handleNewUser(newUsername, 'username')} maxlength={20}>Username</Input>
                </div>
                <div className={styles.field}>
                    <Input type="password" value={newUser.password} handleChange={(newPassword) => handleNewUser(newPassword, 'password')} maxlength={20}>Password</Input>
                </div>
                <div className={styles.button}>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div>
    </div>
);

export default SignUp
