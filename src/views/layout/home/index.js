import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAmiibosPaginatedAction } from '../../../actions';

const Home = (props) => {
	const { amiibos, getAmiibosPaginatedMethod } = props;
	const [pagination] = useState({ page: 1, limit: 15 });

	useEffect(() => {
		if (amiibos.length < 1) {
			getAmiibosPaginatedMethod({
				page: pagination.page,
				limit: pagination.limit,
			});
		}
	}, []);

	return (
		<div className='container'>
			<div className='columns'>
				<div className='column'>
					{amiibos && amiibos.length > 0 ? <h1>yeah</h1> : null}
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	amiibos: PropTypes.array.isRequired,
	pagination: PropTypes.object.isRequired,
	status: PropTypes.number.isRequired,
	message: PropTypes.string.isRequired,
	getAmiibosPaginatedMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		amiibos: state.amiibosStore.amiibos,
		pagination: state.amiibosStore.pagination,
		status: state.amiibosStore.status,
		message: state.amiibosStore.message,
	}),
	(dispatch) => ({
		getAmiibosPaginatedMethod: getAmiibosPaginatedAction(dispatch),
	}),
)(Home);
