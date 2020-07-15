import { gql } from 'apollo-boost';

const GET_TWEETS = gql`
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

const CREATE_TWEET = gql`
    mutation CreateTweet($content: String!, $date: String!, $userId: ID!) {
        createTweet(content: $content, date: $date, userId: $userId, replyTweetId:""){
            content
            date
        }
    }
`

export { GET_TWEETS, CREATE_TWEET };