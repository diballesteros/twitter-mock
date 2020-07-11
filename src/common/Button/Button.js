import React from 'react';
import './Button.css';

const Button = ({children}) => (
    <div className="button_container">
        <span>{children}</span>
    </div>
);

export default Button;