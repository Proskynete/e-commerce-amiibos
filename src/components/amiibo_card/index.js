import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './index.scss';

export const prettyPercentage = (rating) => {
	const percentage = (rating / 100) * 100;

	const classesName = [];
	const completeStar = 'fa fa-star';
	const halfStar = 'fas fa-star-half-alt';
	const emptyStar = 'far fa-star';
	let i = percentage;

	for (i; i >= 1; i -= 1) {
		classesName.push(completeStar);
	}
	if (i === 0.5) {
		classesName.push(halfStar);
	}
	while (classesName.length < 5) {
		classesName.push(emptyStar);
	}
	return classesName.map((className) => (
		<i key={Math.random()} className={`${className}`} aria-hidden='true' />
	));
};

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
							{amiiboSeries} - {gameSeries}
						</Card.Subtitle>
						<Card.Subtitle className='a-card__inner__content__subtitle'>
							{type}
						</Card.Subtitle>
						<Card.Text className='a-card__inner__content__price'>
							<p>{prettyPercentage(rating)}</p>
						</Card.Text>
						<Card.Text className='a-card__inner__content__price'>
							<p>Precio Internet: {price.internet}</p>
							<p>Precio normal: {price.normal}</p>
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
