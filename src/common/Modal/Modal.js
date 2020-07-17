import React from 'react'
import styles from './Modal.module.scss';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Modal = ({ show, handleClose, children }) => {
    const showModal = show ? styles.displayBlock : styles.displayNone;

    return (
        <div className={`${styles.modal} ${showModal}`}>
            <section className={styles.container}>
                <div className={styles.header}>
                    <div></div>
                    <div className={styles.icon}>
                        <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                    </div>
                    <div className={styles.close}>
                        <Button clicked={() => handleClose()}>Close</Button>
                    </div>
                </div>
                {children}
            </section>
        </div>
    )
};

export default Modal;
