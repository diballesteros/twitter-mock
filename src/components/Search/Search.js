import React from 'react';
import styles from './Search.module.scss';
import Icon from '../../common/Icon/Icon';

const Search = () => (
	<div className={styles.searchBar}>
		<div className={styles.icon}>
			<Icon group="SEARCH" icon="loop" width="20" height="20" />
		</div>
		<div>
			<input placeholder="Search Pandi" />
		</div>
	</div>
);

export default Search;
