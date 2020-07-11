import React from 'react';
import { ICONS } from '../../constants/ICONS';

const Icon = props => {
    const { group, icon, color, width, height } = props;
    return (
        <svg width={width} height={height} viewBox={ICONS[group][icon].viewBox}>
            <path d={ICONS[group][icon].path} fill={color ? color : "#B2B6BA"} />
        </svg>
    );
};

export default Icon;
