import React from 'react';
import './List.css';
import Tweet from '../Tweet/Tweet';
import { getTweetsQuery } from '../../queries/queries';
import { useQuery } from '../../../node_modules/@apollo/react-hooks';

const List = () => {
    const { loading, error, data } = useQuery(getTweetsQuery); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div className="list">
            {data.tweets.map((value, i) =>
                <Tweet
                    key={i}
                    tweetContent={value}>
                </Tweet>)}
        </div>
    );
};



export default List;
