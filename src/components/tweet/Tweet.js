import React from 'react';
import './Tweet.css';
import profilePicture from '../../constants/img/Profile_picture.jpg';
import TweetExtension from './tweetExtension/TweetExtension';

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
                <TweetExtension type="reply" count={tweetContent.replies} />
                <TweetExtension type="retweet" count={tweetContent.retweets} />
                <TweetExtension type="like" count={tweetContent.likes} />
            </div>
        </div>
    </div>
);

export default Tweet;