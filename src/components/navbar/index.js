import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LOGO from '../../assets/images/logo.png';
import { logoutAction, showModalAction } from '../../actions';
import './index.scss';

const Navigation = (props) => {
	const { cart, logoutMethod, showModalMethod } = props;
	const [amiibos, setAmiibos] = useState(false);

	const user = JSON.parse(localStorage.getItem('user'));

	const handleLogout = () => {
		logoutMethod();
	};

	useEffect(() => {
		if (cart && cart.length > 0) {
			setAmiibos(true);
		} else {
			setAmiibos(false);
		}
	}, [cart]);

	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='light'
			fixed='top'
			className='navigation'
		>
			<Navbar.Brand href='/' className='navbar-item logo__container'>
				<img src={LOGO} alt='Amiibos logo' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					{/*	<Link href='/' className='nav-link'>Inicio</Link> */}
				</Nav>
				<Nav className='navbar__right'>
					{!user ? (
						<Link to='/login' className='nav-link'>
							<i className='fas fa-user-circle' />
						</Link>
					) : (
						<NavDropdown
							title={`Hola ${user.name}!`}
							id='collasible-nav-dropdown'
						>
							<NavDropdown.Item onClick={handleLogout}>
								<small>
									<i className='fas fa-sign-out-alt' /> Salir
								</small>
							</NavDropdown.Item>
						</NavDropdown>
					)}

					<div
						role='menuitem'
						onClick={() => showModalMethod()}
						className={`nav__item nav-link ${amiibos ? 'has-amiibos' : null}`}
					>
						<i className='fas fa-shopping-cart' />
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

Navigation.propTypes = {
	cart: PropTypes.array.isRequired,
	logoutMethod: PropTypes.func.isRequired,
	showModalMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		cart: state.cartStore.amiibos,
	}),
	(dispatch) => ({
		logoutMethod: logoutAction(dispatch),
		showModalMethod: showModalAction(dispatch),
	}),
)(Navigation);
