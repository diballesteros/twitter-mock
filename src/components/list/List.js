import React from 'react';
import './List.css';
import Tweet from '../tweet/Tweet';
import { TWEETCONTENT as tweetContent } from '../../constants/CONSTANTS';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const getTweetsQuery = gql`
    {
        tweets{
            content
            date
        }
    }
`

const List = (props) => {
    const { loading, error, data } = useQuery(getTweetsQuery);

    return (
        <div className="list">
            {tweetContent.map((value, i) =>
                <Tweet
                    key={i}
                    tweetContent={value}>
                </Tweet>)}
        </div>
    );
};



export default List;
