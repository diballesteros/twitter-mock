import React from 'react';
import './TweetExtension.css';
import Icon from '../../../common/Icon/Icon';

const TweetExtension = ({ type, count }) => (
    <div className={`tweet_extension ${type}`}>
        <div className="tweet_extension-icon_container">
            <Icon group="TWEET" icon={type} width="19" height="19" color="#657786" />
        </div>
        <span>{count}</span>
    </div>
);

export default TweetExtension;