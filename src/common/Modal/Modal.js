import React from 'react'
import './Modal.css';
import Button from '../Button/Button';

const Modal = ({show, children}) => {
    const showModal = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showModal}>
            <section className="modal_container">
                {children}
                <div className="modal_close">
                    <Button>Close</Button>
                </div>
            </section>
        </div>
    )
};

export default Modal;
