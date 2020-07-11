import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/images/logo.png';

import './index.scss';

const FourZeroFour = (props) => {
	const { location } = props;

	return (
		<main className='four-zero-four'>
			<div className='four-zero-four__inner'>
				<div className='four-zero-four__inner__content'>
					<img
						className='four-zero-four__inner__content__logo'
						src={LOGO}
						alt=''
					/>
				</div>
				<div className='four-zero-four__inner__content'>
					<p className='four-zero-four__inner__content__text'>
						Lo sentimos pero la ruta <code>{location.pathname}</code> no existe.
					</p>
					<p className='four-zero-four__inner__content__text'>
						Te recomendamos ir a nuestro <Link to='/'>Inicio</Link> para que
						sigas buscando tu Amiibo favorito.
					</p>
				</div>
			</div>
		</main>
	);
};

export default FourZeroFour;
