import React from 'react';
import './Grouper.css';

const Grouper = ({  children, title }) => (
    <div className="grouper">
        <div className="grouper_header">
            <div className="grouper_header-inner">
                <h2>
                    <div className="grouper_header-text">
                        <span>{title}</span>
                    </div>
                </h2>
            </div>
        </div>
        {children}
    </div>
);

export default Grouper;
