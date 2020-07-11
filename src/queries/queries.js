import { gql } from 'apollo-boost';

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

export { getTweetsQuery };