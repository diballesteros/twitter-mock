import React from 'react';
import './Grouper.css';
import GrouperChild from './grouperChild/GrouperChild';
import { HAPPENING as happening } from '../../constants/CONSTANTS';

const Grouper = ({ title }) => (
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
        {happening.map((value, i) =>
            <GrouperChild
                key={i}
                grouperContent={value}>
            </GrouperChild>)}
    </div>
);

export default Grouper;
