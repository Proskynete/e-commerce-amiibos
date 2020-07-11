import React from 'react';

const Loader = (props) => {
	const { text } = props;

	return (
		<>
			<i className='fas fa-spinner fa-spin' /> {text}
		</>
	);
};

export default Loader;
