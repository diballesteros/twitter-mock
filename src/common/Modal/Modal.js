import React from 'react'
import styles from './Modal.module.scss';
import Button from '../Button/Button';

const Modal = ({show, children}) => {
    const showModal = show ? styles.displayBlock : styles.displayNone;

    return (
        <div className={`${styles.modal} ${showModal}`}>
            <section className={styles.container}>
                {children}
                <div className={styles.close}>
                    <Button>Close</Button>
                </div>
            </section>
        </div>
    )
};

export default Modal;
