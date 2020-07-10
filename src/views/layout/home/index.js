import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Pagination } from 'react-bootstrap';
import { getAmiibosPaginatedAction } from '../../../actions';
import AmiiboCard from '../../../components/amiibo_card';

const Home = (props) => {
	const { amiibos, pagination, getAmiibosPaginatedMethod } = props;

	const updateAmiibos = (id) => {
		getAmiibosPaginatedMethod(id);
	};

	const handleShowAmiibos = (ammibos) =>
		ammibos.map((amiibo) => <AmiiboCard key={amiibo.tail} {...amiibo} />);

	const handlePrintDisplayItems = (pagination) => {
		const item = [];
		if (
			pagination.current_page >= 1 &&
			pagination.current_page < pagination.last_page - 8
		) {
			for (
				let i = pagination.current_page;
				i < pagination.current_page + 8;
				i++
			) {
				item.push(i);
			}
		}
		if (pagination.current_page >= pagination.last_page - 8) {
			for (let i = pagination.last_page - 8; i <= pagination.last_page; i++) {
				item.push(i);
			}
		}

		return item.map((i) => (
			<Pagination.Item
				active={i === pagination.current_page ? true : false}
				onClick={() => updateAmiibos(i)}
			>
				{i}
			</Pagination.Item>
		));
	};

	useEffect(() => {
		if (amiibos.length < 1) {
			getAmiibosPaginatedMethod();
		}
	}, [amiibos, pagination, getAmiibosPaginatedMethod]);

	const handlePrintPagination = (pagination) => {
		return (
			<Pagination>
				{pagination.current_page > 1 ? (
					<>
						<Pagination.First
							onClick={() => updateAmiibos(pagination.first_page)}
						/>
						<Pagination.Prev
							onClick={() => updateAmiibos(pagination.previous_page)}
						/>
					</>
				) : null}
				{handlePrintDisplayItems(pagination)}
				{pagination.current_page < pagination.last_page ? (
					<>
						<Pagination.Next
							onClick={() => updateAmiibos(pagination.next_page)}
						/>
						<Pagination.Last
							onClick={() => updateAmiibos(pagination.last_page)}
						/>
					</>
				) : null}
			</Pagination>
		);
	};

	return (
		<Container>
			{amiibos && amiibos.length > 0 ? (
				<>
					<Row className='justify-content-md-center'>
						{handleShowAmiibos(amiibos)}
					</Row>

					<Row className='justify-content-md-center'>
						{handlePrintPagination(pagination)}
					</Row>
				</>
			) : (
				'Cargando...'
			)}
		</Container>
	);
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
