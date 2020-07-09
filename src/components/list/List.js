import React from 'react';
import './List.css';
import Tweet from '../tweet/Tweet';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getTweetsQuery = gql`
    {
        tweets{
            content
            date
            user {
                username
                displayName
            }
            likes {
                user {
                    username
                }
            }
            retweets {
                user {
                    username
                }
            }
            replies {
                content
            }
        }
    }
`

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
