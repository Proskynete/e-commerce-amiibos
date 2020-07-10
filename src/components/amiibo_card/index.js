import React from 'react';
import { prettyRating } from '../../helper/rating.helper';
import { Col, Card, Badge, Button } from 'react-bootstrap';
import { currencyformat } from '../../helper/currency.helper';
import { mapTypes } from '../../helper/types.helper';
import './index.scss';

const AmiiboCard = (props) => {
	const { amiiboSeries, gameSeries, image, name, type, price, rating } = props;

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

						<Card.Text>
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
							<p className='a-card__inner__content__price normal'>
								Precio normal:
								<span>
									{currencyformat({ number: price.normal, simbol: true })}
								</span>
							</p>
						</Card.Text>

						<Button variant='outline-info' block>
							Agregar a mi carrito
						</Button>
					</Card.Body>
				</div>
			</Card>
		</Col>
	);
};

export default AmiiboCard;
