import React from 'react';
import Icon from '../../common/Icon/Icon';
import './Option.css';

const Option = ({type, children}) => (
    <a className="option" href="/#">
        <div>
            <div className="option_container-icon">
                <Icon group="OPTIONS" icon={type} width="26" height="26" color="#14171a" />
            </div>
            <div className="option_container-text">
                {children}
            </div>
        </div>
    </a>
);

export default Option;