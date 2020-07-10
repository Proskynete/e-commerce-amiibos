import React from 'react';

const AmiiboCard = (props) => {
	const { amiiboSeries, gameSeries, image, name, type } = props;

	console.log(props);

	return (
		<div className='column is-4'>
			<div className='card is-shady'>
				<div className='card-image'>
					<figure className='image is-4by3'>
						<img loading='lazy' src={image} width='320' alt={name} />
					</figure>
				</div>
				<div className='card-content'>
					<div className='media'>
						<div className='media-content'>
							<p className='title is-4'>{name}</p>
							<p className='subtitle is-6'>{type}</p>
							<p className='subtitle is-6'>
								{amiiboSeries} - {gameSeries}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AmiiboCard;
