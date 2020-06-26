import React from 'react';
import Search from '../../search/Search';
import Grouper from '../../grouper/Grouper';
import './RightSection.css';

const RightSection = () => (
    <div className="right_section">
        <div>
            <div className="search_container">
                <Search />
            </div>
            <div className="whats-happening_container">
                <Grouper title="What's happening"/>
            </div>
            <div className="who-to-follow_container">
                <Grouper title="Who to follow"/>
            </div>
        </div>
    </div>
);

export default RightSection;
