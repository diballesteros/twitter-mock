import React from 'react';
import styles from './Tweet.module.scss';
import TweetExtension from './TweetExtension/TweetExtension';
import DateHelper from '../../helpers/DateHelper';
import noprofile from '../../assets/svg/noprofile.svg';

const Tweet = ({ tweetContent }) => (
    <div className={styles.tweet}>
        <div className={styles.profile}>
            <img src={noprofile} alt='profile' />
        </div>
        <div className={styles.container}>
            <div className={styles.user}>
                <label className={styles.username}>{tweetContent.user.displayName}</label>
                <label className={styles.tag}>{tweetContent.user.username} •</label>
                <label className={styles.tag}><DateHelper>{tweetContent.date}</DateHelper></label>
            </div>
            <span>{tweetContent.content}</span>
            <div className={styles.interact}>
                <TweetExtension type="reply" count={tweetContent.replies.length} />
                <TweetExtension type="retweet" count={tweetContent.retweets.length} />
                <TweetExtension type="like" count={tweetContent.likes.length} />
            </div>
        </div>
    </div>
);

export default Tweet;