import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import List from '../../components/List/List';
import Editor from '../../components/Editor/Editor';
import Header from '../../layout/Header/Header';
import Center from '../../layout/Center/Center';
import RightSection from '../../layout/RightSection/RightSection';
import Home from '../../components/Home/Home';
import Tweet from '../../components/Tweet/Tweet';
import ApolloWrapper from '../../helpers/ApolloWrapper';
import { CREATE_TWEET, GET_TWEETS } from '../../queries/queries';
import { useQuery, useMutation } from '@apollo/react-hooks';

const Dashboard = () => {
	const [content, setContent] = useState('');
	const { loading, error, data } = useQuery(GET_TWEETS);
	const [createTweet] = useMutation(CREATE_TWEET);

	const sendTweet = (tweet) => {
		createTweet({
			variables: {
				content: tweet,
			},
			refetchQueries: [{ query: GET_TWEETS }],
		});
	};

	return (
		<div className={styles.dashboard}>
			<Header />
			<main className={styles.banner}>
				<div className={styles.container}>
					<div className={styles.divider}>
						<Center
							header={<Home />}
							section={
								<Editor
									sendTweet={(tweet) => sendTweet(tweet)}
									handleChange={(content) =>
										setContent(content)
									}
									content={content}
								/>
							}
							body={
								<List>
									<ApolloWrapper
										loading={loading}
										error={error}
										data={data}>
										{data
											? data.tweets.map((value, i) => (
													<Tweet
														key={i}
														tweetContent={
															value
														}></Tweet>
											  ))
											: null}
									</ApolloWrapper>
								</List>
							}
						/>
						<RightSection />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
