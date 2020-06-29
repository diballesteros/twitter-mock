import React from 'react'
import './Input.css';

const Input = ({type, children}) => (
    <label className="input">
        <div className="input_container">
            <div className="input_text">{children}</div>
            <div className="input_value">
                <input type={type === 'password' ? type : 'text'} id={`${type}_login`}/>
            </div>
        </div>
    </label>
);

export default Input;
