import React from 'react';
import './Button.css';

const Button = (props) => (
    <div className="button_container">
        <span>{props.children}</span>
    </div>
);

export default Button;