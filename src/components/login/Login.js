import React, { useState } from 'react';
import styles from './Login.module.scss';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Modal from '../../common/Modal/Modal';
import SignUp from '../SignUp/SignUp';

const Login = () => {
    const [showSignUp, setShowSignup] = useState(false);

    return (
        <main className={styles.login}>
            <div className={styles.container}>
                <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                <h1>Log in to Pandi</h1>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <Input type="text">Username</Input>
                    </div>
                    <div className={styles.field}>
                        <Input type="password">Password</Input>
                    </div>
                    <div className={`${styles.button} ${styles.field}`}>
                        <Button>Log in</Button>
                    </div>
                    <div className={`${styles.button} ${styles.field}`}>
                        <Button clicked={() => setShowSignup(!showSignUp)}>Sign up</Button>
                    </div>
                </form>
            </div>
            <Modal show={true} handleClose={() => setShowSignup(!showSignUp)}>
                <SignUp />
            </Modal>
        </main>
    );
}

export default Login;
