import React from 'react';
import './Tweet.css';
import profilePicture from '../../constants/img/Profile_picture.jpg';
import TweetExtension from './TweetExtension/TweetExtension';

const Tweet = ({ tweetContent }) => (
    <div className="tweet">
        <div className="tweet_profile-picture">
            <img src={profilePicture} alt='profile' />
        </div>
        <div className="tweet_content-container">
            <div className="tweet_user-container">
                <label className="tweet_user_name">{tweetContent.user.displayName}</label>
                <label className="tweet_user_tag">{tweetContent.user.username} •</label>
                <label className="tweet_user_tag">{tweetContent.date}</label>
            </div>
            <span className="tweet_text">{tweetContent.content}</span>
            <div className="tweet_interact-container">
                <TweetExtension type="reply" count={tweetContent.replies.length} />
                <TweetExtension type="retweet" count={tweetContent.retweets.length} />
                <TweetExtension type="like" count={tweetContent.likes.length} />
            </div>
        </div>
    </div>
);

export default Tweet;