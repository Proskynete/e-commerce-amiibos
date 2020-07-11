import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { prettyRating } from '../../helper/rating.helper';
import { Col, Card, Badge, Button } from 'react-bootstrap';
import { currencyformat } from '../../helper/currency.helper';
import { mapTypes } from '../../helper/types.helper';
import {
	addAmiiboToCartAction,
	removeAmiiboFromCartAction,
} from '../../actions';
import './index.scss';

const AmiiboCard = (props) => {
	const {
		amiiboSeries,
		gameSeries,
		image,
		name,
		type,
		price,
		rating,
		tail,
		cart,
		addAmiiboToCartMethod,
		removeAmiiboFromCartMethod,
	} = props;
	const [hasAdded, setHasAdded] = useState(false);

	const handleAddToCart = () => {
		addAmiiboToCartMethod({ image, name, type, price, tail });
	};

	const handleRemoveFromCart = () => {
		removeAmiiboFromCartMethod(tail);
	};

	useEffect(() => {
		const amiiboFinded = cart.find((amiibo) => amiibo.tail === tail);
		if (amiiboFinded) {
			setHasAdded(true);
		} else {
			setHasAdded(false);
		}
	}, [cart, tail]);

	return (
		<Col xs md={3}>
			<Card className='a-card'>
				<div className='a-card__inner'>
					<div className='a-card__inner__image'>
						<Card.Img
							variant='top'
							src={image}
							alt={name}
							className='a-card__inner__image__img'
						/>
					</div>
					<Card.Body className='a-card__inner__content'>
						<Card.Title className='a-card__inner__content__title'>
							{name}
						</Card.Title>
						<Card.Subtitle className='a-card__inner__content__subtitle'>
							<p>
								Amiibo: <span>{amiiboSeries}</span>
							</p>
							<p>
								Juego: <span>{gameSeries}</span>
							</p>
						</Card.Subtitle>

						<div className='card-text'>
							<p
								className={`a-card__inner__content__rating ${
									rating < 3
										? 'text-danger'
										: rating >= 4
										? 'text-success'
										: 'text-warning'
								}`}
							>
								{prettyRating(rating)}
							</p>
							<Badge
								variant={mapTypes[type].color}
								className='a-card__inner__content__type'
							>
								<i className='fas fa-tag' /> {mapTypes[type].name}
							</Badge>
							<p className='a-card__inner__content__price internet'>
								Precio Internet:
								<span>
									{currencyformat({ number: price.internet, simbol: true })}
								</span>
							</p>
							<div className='a-card__inner__content__price normal'>
								Precio normal:
								<span>
									{currencyformat({ number: price.normal, simbol: true })}
								</span>
							</div>
						</div>

						{!hasAdded ? (
							<Button
								variant='outline-info'
								className='a-card__inner__content__button'
								onClick={handleAddToCart}
								block
							>
								Agregar a mi carrito
							</Button>
						) : (
							<Button
								variant='outline-danger'
								className='a-card__inner__content__button'
								onClick={handleRemoveFromCart}
								block
							>
								Eliminar de mi carrito
							</Button>
						)}
					</Card.Body>
				</div>
			</Card>
		</Col>
	);
};

AmiiboCard.propTypes = {
	cart: PropTypes.array.isRequired,
	addAmiiboToCartMethod: PropTypes.func.isRequired,
	removeAmiiboFromCartMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		cart: state.cartStore.amiibos,
	}),
	(dispatch) => ({
		addAmiiboToCartMethod: addAmiiboToCartAction(dispatch),
		removeAmiiboFromCartMethod: removeAmiiboFromCartAction(dispatch),
	}),
)(AmiiboCard);
