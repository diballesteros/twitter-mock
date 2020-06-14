import React from 'react';
import './Option.css';

const Option = (props) => (
    <a>
        <div>
            <div>

            </div>
            <div>
                {props.children}
            </div>
        </div>
    </a>
);

export default Option;