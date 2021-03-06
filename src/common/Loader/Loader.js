import React from 'react';
import styles from './Loader.module.scss';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
	display: block;
	margin: 0 auto;
`;

const Loader = ({ loading }) => (
	<div className={styles.loader}>
		<ClipLoader
			css={override}
			size={150}
			color={'#1da1f2'}
			loading={loading}
		/>
	</div>
);

export default Loader;
