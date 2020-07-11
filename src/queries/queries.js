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
    mutation {
        createTweet(content:"", date:"", userId:"", replyTweetId:""){
            content
            date
        }
    }
`

export { GET_TWEETS, CREATE_TWEET };