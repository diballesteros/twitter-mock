import React from 'react';
import styles from './RightSection.module.scss';
import Search from '../../../common/Search/Search';
import Grouper from '../../Grouper/Grouper';
import HappeningContent from '../../HappeningCard/HappeningCard';
import FollowCard from '../../FollowCard/FollowCard';
import { HAPPENING as happening } from '../../../constants/CONSTANTS';
import { FOLLOW as follow } from '../../../constants/CONSTANTS';


const RightSection = () => (
    <div className={styles.rightSection}>
        <div>
            <div className={styles.searchContainer}>
                <Search />
            </div>
            <div>
                <Grouper title="What's happening">
                    {happening.map((value, i) =>
                        <HappeningContent
                            key={i}
                            grouperContent={value}>
                        </HappeningContent>)}
                </Grouper>
            </div>
            <div>
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
