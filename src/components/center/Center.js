import React from 'react';
import './Center.css';

const Center = ({ header, section, body }) => (
    <div className="center">
        <div className="center_title">
            {header}
        </div>
        <div className="center_section">
            {section}
        </div>
        <div className="center_separator"></div>
        {body}
    </div>
);

export default Center;
