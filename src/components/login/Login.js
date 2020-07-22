import React, { useState } from 'react';
import styles from './Login.module.scss';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Modal from '../../common/Modal/Modal';
import SignUp from '../SignUp/SignUp';
import Loader from '../../common/Loader/Loader';
import { LOGIN } from '../../queries/queries';
import { useLazyQuery } from '@apollo/react-hooks';

const Login = () => {
    const [showSignUp, setShowSignup] = useState(false);
    const [loginUser, setLoginUser] = useState({ username: '', password: '' });
    const [newUser, setNewUser] = useState({ name: '', username: '', password: '' });
    const [tryLogin, { loading, data, error }] = useLazyQuery(LOGIN);

    const updateNewUser = (value, reference) => {
        setNewUser({
            ...newUser,
            [reference]: value
        });
    }

    const updateLoginUser = (value, reference) => {
        setLoginUser({
            ...loginUser,
            [reference]: value
        });
    }

    if (loading) return <Loader loading={loading}></Loader>;

    if (data) {
        console.log('test');
    }

    return (
        <main className={styles.login}>
            <div className={styles.container}>
                <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                <h1>Log in to Pandi</h1>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <Input type="text"
                            value={loginUser.username}
                            handleChange={(loginUser) => updateLoginUser(loginUser, 'username')}
                            maxlength={20}>Username</Input>
                    </div>
                    <div className={styles.field}>
                        <Input type="password"
                            value={loginUser.password}
                            handleChange={(loginPassword) => updateLoginUser(loginPassword, 'password')}
                            maxlength={20}>Password</Input>
                    </div>
                    <div className={`${styles.button} ${styles.field}`}>
                        <Button clicked={() => tryLogin({ variables: { username: loginUser.username, password: loginUser.password } })}
                            disabled={loginUser.password.trim().length === 0 || loginUser.username.trim().length === 0}>
                            Log in</Button>
                    </div>
                    <div className={`${styles.button} ${styles.field}`}>
                        <Button clicked={() => setShowSignup(!showSignUp)}>Sign up</Button>
                    </div>
                </form>
            </div>
            <Modal show={showSignUp} handleClose={() => setShowSignup(!showSignUp)}>
                <SignUp newUser={newUser} handleNewUser={(newUser, reference) => updateNewUser(newUser, reference)} />
            </Modal>
        </main>
    );
}

export default Login;
