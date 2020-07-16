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
    mutation CreateTweet($content: String!) {
        createTweet(content: $content){
            content
        }
    }
`

export { GET_TWEETS, CREATE_TWEET };