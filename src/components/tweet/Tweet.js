import React from 'react';
import './Tweet.css';
import profilePicture from '../../constants/img/Profile_picture.jpg';
import replyIcon from '../../constants/img/reply.png';
import retweetIcon from '../../constants/img/retweet.png';
import likeIcon from '../../constants/img/like.png';

const Tweet = ({tweetContent}) => (
    <div className="tweet">
        <div className="tweet_profile-picture">
            <img src={profilePicture} alt='profile'/>
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
                <div>
                    <img src={replyIcon} alt="reply"/>
                    <span className="tweet_reply">{tweetContent.replies}</span>
                </div>
                <div>
                    <img src={retweetIcon} alt="retweet"/>
                    <span className="tweet_retweet">{tweetContent.retweets}</span>
                </div>
                <div>
                    <img src={likeIcon} alt="like"/>
                    <span className="tweet_like">{tweetContent.likes}</span>
                </div>          
            </div>
        </div>
    </div>
);

export default Tweet;