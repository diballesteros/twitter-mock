import React from 'react';
import Icon from '../icon/icon';
import './Option.css';

const Option = (props) => (
    <a href="/#">
        <div>
            <div className="option_container-icon">
                <Icon group="OPTIONS" icon={props.type} width="26" height="26" color="#14171a" />
            </div>
            <div className="option_container-text">
                {props.children}
            </div>
        </div>
    </a>
);

export default Option;