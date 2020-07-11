import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LOGO from '../../assets/images/logo.png';
import { logoutAction } from '../../actions';
import './index.scss';

const Navigation = (props) => {
	const { logoutMethod } = props;
	const user = JSON.parse(localStorage.getItem('user'));

	const handleLogout = () => {
		logoutMethod();
	};

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
							<NavDropdown.Item href='/profile'>
								<small>
									<i className='fas fa-user' /> Mi perfil
								</small>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={handleLogout}>
								<small>
									<i className='fas fa-sign-out-alt' /> Salir
								</small>
							</NavDropdown.Item>
						</NavDropdown>
					)}

					<Link to='' className='nav__item nav-link'>
						<i className='fas fa-shopping-cart' />
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

Navigation.propTypes = {
	login_state: PropTypes.bool.isRequired,
	logoutMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		login_state: state.loginStore.has_login,
	}),
	(dispatch) => ({
		logoutMethod: logoutAction(dispatch),
	}),
)(Navigation);
