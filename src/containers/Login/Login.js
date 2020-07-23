import React, { useState, useRef, useContext, useEffect } from 'react';
import styles from './Login.module.scss';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Modal from '../../common/Modal/Modal';
import SignUp from '../../components/SignUp/SignUp';
import Loader from '../../common/Loader/Loader';
import AuthContext from '../../context/AuthContext';
import { LOGIN } from '../../queries/queries';
import { useLazyQuery } from '@apollo/react-hooks';

const Login = () => {
    const auth = useContext(AuthContext);
    const [showSignUp, setShowSignup] = useState(false);
    const loginUser = useRef('');
    const loginPassword = useRef('');
    const [tryLogin, { loading, data, error }] = useLazyQuery(LOGIN);

    useEffect(() => {
        if (data) {
            auth.login(data.login.token, data.login.user, data.login.tokenExpiration);
        }
        return;
    }, [data, auth]);

    const createNewUser = (newName, newUsername, newPassword) => {
        console.log('create user test');
    }

    if (loading) return <Loader loading={loading}></Loader>;

    return (
        <main className={styles.login}>
            <div className={styles.container}>
                <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                <h1>Log in to Pandi</h1>
                {
                    error ?
                        <div>
                            <span className={styles.error}>
                                The username and password you entered did not match our records. Please double-check and try again.
                        </span>
                        </div> : null
                }
                <form className={styles.form}>
                    <div className={styles.field}>
                        <Input type="text" forwardedRef={loginUser} maxlength={20}>Username</Input>
                    </div>
                    <div className={styles.field}>
                        <Input type="password" forwardedRef={loginPassword} maxlength={20}>Password</Input>
                    </div>
                    <div className={`${styles.button} ${styles.field}`}>
                        <Button clicked={() => tryLogin({ variables: { username: loginUser.current.value, password: loginPassword.current.value } })}>
                            Log in</Button>
                    </div>
                    <div className={`${styles.button} ${styles.field}`}>
                        <Button clicked={() => setShowSignup(!showSignUp)}>Sign up</Button>
                    </div>
                </form>
            </div>
            <Modal show={showSignUp} handleClose={() => setShowSignup(!showSignUp)}>
                <SignUp createNewUser={(newName, newUsername, newPassword) => createNewUser(newName, newUsername, newPassword)} />
            </Modal>
        </main>
    );
}

export default Login;
