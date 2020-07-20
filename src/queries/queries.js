import { gql } from 'apollo-boost';

const LOGIN = gql`
    query Login($username: String!, $password: String!) {
            login(username: $username, password: $password) {
                token
                tokenExpiration
            }
        }
`;

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
`;

const CREATE_TWEET = gql`
    mutation CreateTweet($content: String!) {
        createTweet(content: $content){
            content
        }
    }
`;

export { LOGIN, GET_TWEETS, CREATE_TWEET };