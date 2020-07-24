import React from 'react';
import styles from './TweetExtension.module.scss';
import Icon from '../../../common/Icon/Icon';

const TweetExtension = ({ type, count }) => (
	<div className={`${styles.extension} ${styles[type]}`}>
		<div className={styles.icon}>
			<Icon
				group="TWEET"
				icon={type}
				width="19"
				height="19"
				color="#657786"
			/>
		</div>
		<span>{count}</span>
	</div>
);

export default TweetExtension;
