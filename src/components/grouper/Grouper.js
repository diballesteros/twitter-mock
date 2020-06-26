import React from 'react';
import './Grouper.css';
import HappeningContent from './happeningContent/HappeningContent';
import FollowContent from './followContent/FollowContent';
import { HAPPENING as happening } from '../../constants/CONSTANTS';
import { FOLLOW as follow } from '../../constants/CONSTANTS';

const Grouper = ({ title, type }) => (
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
        {type === 'happening' ?
            happening.map((value, i) =>
                <HappeningContent
                    key={i}
                    grouperContent={value}>
                </HappeningContent>) :
            follow.map((value, i) =>
                <FollowContent
                    key={i}
                    grouperContent={value}>
                </FollowContent>)}
    </div>
);

export default Grouper;
