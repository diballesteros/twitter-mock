import React from 'react';
import Loader from '../common/Loader/Loader';

const ApolloWrapper = ({ loading, error, data, children }) => {
	return (
		<>
			{loading && <Loader loading={loading}></Loader>}
			{error && (
				<p>
					Error:{' '}
					{error.graphQLErrors.map(({ message }, i) => (
						<span key={i}>{message}</span>
					))}
				</p>
			)}
			{data && children}
		</>
	);
};

export default ApolloWrapper;
