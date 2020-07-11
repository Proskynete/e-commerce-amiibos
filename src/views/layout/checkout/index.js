import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Container,
	Row,
	Col,
	Table,
	Badge,
	Card,
	Form,
	Button,
} from 'react-bootstrap';
import { currencyformat } from '../../../helper/currency.helper';
import { mapTypes } from '../../../helper/types.helper';
import { removeAmiiboFromCartAction } from '../../../actions';

const Checkout = (props) => {
	const { cart, removeAmiiboFromCartMethod } = props;
	const [totalPrice, setTotalPrice] = useState({ normal: 0, internet: 0 });

	const handlePrintamiibos = () => {
		return cart.map((amiibo, i) => {
			return (
				<tr key={amiibo.tail}>
					<td>{i + 1}</td>
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

	useEffect(() => {
		if (cart && cart.length > 0) {
			setTotalPrice({
				normal: cart.reduce((acc, curr) => acc + curr.price.normal, 0),
				internet: cart.reduce((acc, curr) => acc + curr.price.internet, 0),
			});
		}
	}, [cart]);

	return (
		<Container fluid className='checkout'>
			<Row>
				<Col xs md={7}>
					<Card>
						<Card.Body>
							<Col>
								<h3>Detalle de tu compra</h3>
							</Col>
							<Col style={{ marginTop: '30px' }}>
								<Table bordered hover size='sm'>
									<thead>
										<tr>
											<th>#</th>
											<th>Nombre</th>
											<th>Tipo</th>
											<th>Precio normal</th>
											<th>Precio interet</th>
											<th />
										</tr>
									</thead>
									<tbody>{handlePrintamiibos()}</tbody>
								</Table>
							</Col>

							<Col style={{ marginTop: '30px' }}>
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
						</Card.Body>
					</Card>
				</Col>
				<Col xs md={5}>
					<Card>
						<Card.Body>
							<Col>
								<h3>Procesar compra</h3>

								<fieldset>
									<Form.Group as={Row}>
										<Form.Label as='legend' column sm={5}>
											Método de pago
										</Form.Label>
										<Col sm={10}>
											<Form.Check
												type='radio'
												label='Retiro en tienda (Precio normal)'
												name='payment_method'
												id='normal'
											/>
											<Form.Check
												type='radio'
												label='Internet'
												name='payment_method'
												id='intetnet'
											/>
										</Col>
									</Form.Group>

									<Button variant='outline-success'>Finalizar compra</Button>
								</fieldset>
							</Col>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

Checkout.propTypes = {
	cart: PropTypes.array.isRequired,
	removeAmiiboFromCartMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		cart: state.cartStore.amiibos,
	}),
	(dispatch) => ({
		removeAmiiboFromCartMethod: removeAmiiboFromCartAction(dispatch),
	}),
)(Checkout);
