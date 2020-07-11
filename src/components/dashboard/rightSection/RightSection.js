import React from 'react';
import Search from '../../../common/Search/Search';
import Grouper from '../../Grouper/Grouper';
import HappeningContent from '../../HappeningCard/HappeningCard';
import FollowCard from '../../FollowCard/FollowCard';
import { HAPPENING as happening } from '../../../constants/CONSTANTS';
import { FOLLOW as follow } from '../../../constants/CONSTANTS';
import './RightSection.css';

const RightSection = () => (
    <div className="right_section">
        <div>
            <div className="search_container">
                <Search />
            </div>
            <div className="whats-happening_container">
                <Grouper title="What's happening">
                    {happening.map((value, i) =>
                        <HappeningContent
                            key={i}
                            grouperContent={value}>
                        </HappeningContent>)}
                </Grouper>
            </div>
            <div className="who-to-follow_container">
                <Grouper title="Who to follow">
                    {follow.map((value, i) =>
                        <FollowCard
                            key={i}
                            grouperContent={value}>
                        </FollowCard>)}
                </Grouper>
            </div>
        </div>
    </div>
);

export default RightSection;
