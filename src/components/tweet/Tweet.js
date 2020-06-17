import React from 'react';
import './Tweet.css';
import profilePicture from '../../constants/img/Profile_picture.jpg';
import Icon from '../icon/icon';

const Tweet = ({ tweetContent }) => (
    <div className="tweet">
        <div className="tweet_profile-picture">
            <img src={profilePicture} alt='profile' />
        </div>
        <div className="tweet_content-container">
            <div className="tweet_user-container">
                <label className="tweet_user_name">{tweetContent.user.name}</label>
                <label className="tweet_user_tag">{tweetContent.user.tag} •</label>
                <label className="tweet_user_tag">{tweetContent.time}</label>
            </div>
            <span className="tweet_text">{tweetContent.text}</span>
            <span className="tweet_image">{tweetContent.Image}</span>
            <div className="tweet_interact-container">
                <div className="tweet_interact-container-reply">
                    <div className="tweet_interact-container-highlight"></div>
                    <div className="tweet_interact-icon_container">
                        <Icon group="TWEET" icon="reply" width="19" height="19" color="#657786" />
                    </div>
                    <span>{tweetContent.replies}</span>
                </div>
                <div className="tweet_interact-container-retweet">
                    <div className="tweet_interact-container-highlight"></div>
                    <div className="tweet_interact-icon_container">
                        <Icon group="TWEET" icon="retweet" width="19" height="19" color="#657786" />
                    </div>
                    <span>{tweetContent.retweets}</span>
                </div>
                <div className="tweet_interact-container-like">
                    <div className="tweet_interact-container-highlight"></div>
                    <div className="tweet_interact-icon_container">
                        <Icon group="TWEET" icon="like" width="19" height="19" color="#657786" />
                    </div>
                    <span>{tweetContent.likes}</span>
                </div>
            </div>
        </div>
    </div>
);

export default Tweet;