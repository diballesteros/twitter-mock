import React from 'react';
import styles from './HappeningCard.module.scss';
import nascarPicture from '../../assets/img/NASCAR.jpg';

const HappeningCard = ({ grouperContent }) => (
	<div className={styles.happeningCard}>
		<a href="/#">
			<div className={styles.container}>
				<div className={styles.category}>
					<div className={styles.trendType}>
						<span>{grouperContent.user}</span>
					</div>
					<div className={styles.dot}>
						<span>•</span>
					</div>
					<div className={styles.timePlace}>
						<span>{grouperContent.time}</span>
					</div>
				</div>
				<div className={styles.text}>
					<span>{grouperContent.text}</span>
				</div>
			</div>
			<div className={styles.picture}>
				<img src={nascarPicture} alt="trendingpicture"></img>
			</div>
		</a>
	</div>
);

export default HappeningCard;
