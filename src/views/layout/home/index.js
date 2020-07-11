import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Pagination, Jumbotron, Col } from 'react-bootstrap';
import { getAmiibosPaginatedAction } from '../../../actions';
import AmiiboCard from '../../../components/amiibo_card';
import './index.scss';

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
			pagination.current_page < pagination.last_page - 4
		) {
			for (
				let i = pagination.current_page;
				i < pagination.current_page + 4;
				i++
			) {
				item.push(i);
			}
		}
		if (pagination.current_page >= pagination.last_page - 4) {
			for (let i = pagination.last_page - 3; i <= pagination.last_page; i++) {
				item.push(i);
			}
		}

		return item.map((i) => (
			<Pagination.Item
				key={i}
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
			<Pagination className='justify-content-center'>
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
		<Container fluid className='home'>
			<Row className='justify-content-center'>
				{amiibos && amiibos.length > 0 ? (
					<>
						<Col xs={12}>
							<Jumbotron fluid className='text-center'>
								<Container>
									<h1>Bienvenido Amiibo-Maniatico!</h1>
									<p>
										Acá encontrarás la mejor y más grande variedad de nuestros
										amados Amiibos. A si que no pierdas más tiempo, ve a
										conseguir el tuyo antes que se agoten.
									</p>
								</Container>
							</Jumbotron>
						</Col>

						<Col xs={12}>
							<div className='container__amiibos'>
								{handleShowAmiibos(amiibos)}
							</div>
						</Col>

						<Col xs={12}>{handlePrintPagination(pagination)}</Col>
					</>
				) : (
					'Cargando...'
				)}
			</Row>
		</Container>
	);
};

Home.propTypes = {
	amiibos: PropTypes.array.isRequired,
	pagination: PropTypes.object.isRequired,
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
