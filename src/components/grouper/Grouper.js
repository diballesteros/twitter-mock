import React from 'react';
import styles from './Grouper.module.scss';

const Grouper = ({ children, title }) => (
	<div className={styles.grouper}>
		<div className={styles.header}>
			<div className={styles.inner}>
				<h2>
					<div className={styles.text}>
						<span>{title}</span>
					</div>
				</h2>
			</div>
		</div>
		{children}
	</div>
);

export default Grouper;
