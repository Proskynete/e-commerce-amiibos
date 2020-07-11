import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Container,
	Row,
	Col,
	Modal,
	Table,
	Button,
	Badge,
} from 'react-bootstrap';
import { currencyformat } from '../../helper/currency.helper';
import { mapTypes } from '../../helper/types.helper';
import { hideModalAction, removeAmiiboFromCartAction } from '../../actions';

const CustomModal = (props) => {
	const { show, cart, hideModalMethod, removeAmiiboFromCartMethod } = props;
	const [showModal, setShowModal] = useState(false);
	const [totalPrice, setTotalPrice] = useState({ normal: 0, internet: 0 });

	const handlePrintamiibos = () => {
		return cart.map((amiibo) => {
			return (
				<tr key={amiibo.tail}>
					<td>{amiibo.name}</td>
					<td>{mapTypes[amiibo.type].name}</td>
					<td>
						{currencyformat({ number: amiibo.price.normal, simbol: true })}
					</td>
					<td>
						{currencyformat({ number: amiibo.price.internet, simbol: true })}
					</td>
					<td className='text-center'>
						<div
							role='menuitem'
							onClick={() => removeAmiiboFromCartMethod(amiibo.tail)}
						>
							<Badge variant='danger'>
								<i className='fas fa-times' />
							</Badge>
						</div>
					</td>
				</tr>
			);
		});
	};

	const handlePrintTable = () => {
		return (
			<Table bordered hover size='sm'>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Tipo</th>
						<th>Precio normal</th>
						<th>Precio interet</th>
						<th />
					</tr>
				</thead>
				<tbody>{handlePrintamiibos()}</tbody>
			</Table>
		);
	};

	useEffect(() => {
		setShowModal(show);
		if (cart && cart.length > 0) {
			setTotalPrice({
				normal: cart.reduce((acc, curr) => acc + curr.price.normal, 0),
				internet: cart.reduce((acc, curr) => acc + curr.price.internet, 0),
			});
		}
	}, [show, cart]);

	return (
		<Modal
			show={showModal}
			onHide={() => hideModalMethod()}
			animation={false}
			size={cart.length > 0 ? 'lg' : ''}
		>
			<Modal.Body style={{ marginTop: '20px' }}>
				<Container>
					{cart && cart.length > 0 ? (
						<>
							<Row>
								<Col>
									<p>Éstos son los Amiibos que tienes hasta el momento</p>
								</Col>
							</Row>
							<Row>
								<Col>{handlePrintTable()}</Col>
							</Row>
							<Row className='float-right'>
								<Col>
									<p style={{ margin: '0' }}>
										Total precio normal:
										<span style={{ marginLeft: '5px' }}>
											{currencyformat({
												number: totalPrice.normal,
												simbol: true,
											})}
										</span>
									</p>
									<p style={{ margin: '0' }}>
										Total precio internet:
										<span style={{ marginLeft: '5px' }}>
											{currencyformat({
												number: totalPrice.internet,
												simbol: true,
											})}
										</span>
									</p>
								</Col>
							</Row>
						</>
					) : (
						<Row>
							<Col>
								<p style={{ textAlign: 'center' }}>
									Aún no has seleccionado ningún Amiibo Y.Y
								</p>
							</Col>
						</Row>
					)}
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-secondary' onClick={() => hideModalMethod()}>
					Cerrar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

CustomModal.propTypes = {
	show: PropTypes.bool.isRequired,
	cart: PropTypes.array.isRequired,
	hideModalMethod: PropTypes.func.isRequired,
	removeAmiiboFromCartMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		show: state.modalStore.show,
		cart: state.cartStore.amiibos,
	}),
	(dispatch) => ({
		hideModalMethod: hideModalAction(dispatch),
		removeAmiiboFromCartMethod: removeAmiiboFromCartAction(dispatch),
	}),
)(CustomModal);
