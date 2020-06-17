import React from 'react';
import './List.css';
import Tweet from '../tweet/Tweet';
import { TWEETCONTENT as tweetContent } from '../../constants/CONSTANTS';

const List = (props) => (
    <div className="list">
        {tweetContent.map((value, i) =>
            <Tweet
                key={i}
                tweetContent={value}>
            </Tweet>)}
    </div>
);

export default List;
