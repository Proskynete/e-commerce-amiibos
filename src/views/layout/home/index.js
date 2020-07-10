import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAmiibosPaginatedAction } from '../../../actions';

const Home = (props) => {
	const { amiibos, getAmiibosPaginatedMethod } = props;
	const [pagination, setPagination] = useState({ page: 1, limit: 15 });
	const [showAmiibos, setShowAmiibos] = useState([]);

	getAmiibosPaginatedMethod({
		page: pagination.page,
		limit: pagination.limit,
	});

	useEffect(() => {
		if (amiibos.length > 0) {
			setShowAmiibos(amiibos);
		}
	}, [amiibos]);

	console.log(showAmiibos);

	return (
		<div className='container'>
			<div className='columns'>
				<div className='column'>
					<h1>Hello</h1>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	getAmiibosPaginatedMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		amiibos: state.amiibos.amiibos,
	}),
	(dispatch) => ({
		getAmiibosPaginatedMethod: getAmiibosPaginatedAction(dispatch),
	}),
)(memo(Home));
