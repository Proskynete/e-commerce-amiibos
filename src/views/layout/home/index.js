import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { getAmiibosPaginatedAction } from '../../../actions';
import AmiiboCard from '../../../components/amiibo_card';

const Home = (props) => {
	const { amiibos, getAmiibosPaginatedMethod } = props;
	const [pagination] = useState({ page: 1, limit: 12 });

	const handleShowAmiibos = (ammibos) =>
		ammibos.map((amiibo) => <AmiiboCard key={amiibo.tail} {...amiibo} />);

	useEffect(() => {
		if (amiibos.length < 1) {
			getAmiibosPaginatedMethod({
				page: pagination.page,
				limit: pagination.limit,
			});
		}
	}, [amiibos, pagination, getAmiibosPaginatedMethod]);

	return (
		<Container>
			<Row>
				<div className='row columns is-multiline'>
					{amiibos && amiibos.length > 0 ? handleShowAmiibos(amiibos) : null}
				</div>
			</Row>
		</Container>
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
