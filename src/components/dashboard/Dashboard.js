import React from 'react';
import styles from './Dashboard.module.scss';
import List from '../List/List';
import Editor from '../Editor/Editor';
import Header from './Header/Header';
import Center from './Center/Center';
import RightSection from './RightSection/RightSection';
import Home from '../Home/Home';
import Tweet from '../Tweet/Tweet';
import { CREATE_TWEET, GET_TWEETS } from '../../queries/queries';
import { useQuery, useMutation } from '@apollo/react-hooks';

const Dashboard = () => {
    const { loading, error, data } = useQuery(GET_TWEETS);
    const [createTweet] = useMutation(CREATE_TWEET);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const handleTweet = (content) => {
        createTweet({
            variables: {
                content: content
            }
        });
    };

    return (
        <div className={styles.dashboard}>
            <Header />
            <main className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.divider}>
                        <Center
                            header={
                                <Home />
                            }
                            section={
                                <Editor handleTweet={(content) => handleTweet(content)}/>
                            }
                            body={
                                <List>
                                    {data.tweets.map((value, i) =>
                                        <Tweet
                                            key={i}
                                            tweetContent={value}>
                                        </Tweet>)}
                                </List>
                            }
                        />
                        <RightSection />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;