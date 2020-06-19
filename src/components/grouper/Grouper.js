import React from 'react';
import './Grouper.css';
import GrouperChild from './grouperChild/GrouperChild';

const Grouper = (props) => (
    <div className="grouper">
        <div className="grouper_header">
            <div className="grouper_header-inner">
                <h2>
                    <div className="grouper_header-text">
                        <span>Grouper</span>
                    </div>
                </h2>
            </div>
        </div>
        <GrouperChild />
    </div>
);

export default Grouper;
