import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/images/logo.png';
import { logoutAction } from '../../actions';
import './index.scss';

const Navbar = (props) => {
	const { logoutMethod } = props;

	const [showMenu, setShowMenu] = useState(false);
	const user = JSON.parse(localStorage.getItem('user'));

	const handleSetMobileMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleLogout = () => {
		logoutMethod();
	};

	return (
		<nav
			className='navbar is-fixed-top nav'
			role='navigation'
			aria-label='main navigation'
		>
			<div className='navbar-brand'>
				<div className='nav__logo'>
					<a href='/' className='navbar-item'>
						<img src={LOGO} alt='Amiibos logo' />
					</a>
				</div>

				<div
					role='menuitem'
					className='navbar-burger burger'
					aria-label='menu'
					data-target='navigation'
					onClick={handleSetMobileMenu}
				>
					<span aria-hidden='true' />
					<span aria-hidden='true' />
					<span aria-hidden='true' />
				</div>
			</div>

			<div
				id='navigation'
				className={`${showMenu ? 'navbar-menu is-active' : 'navbar-menu'}`}
			>
				<div className='navbar-start'>
					<Link to='/' className='navbar-item'>
						Inicio
					</Link>
				</div>

				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='buttons'>
							{!user ? (
								<Link to='/login' className='nav__item has-text-dark'>
									<span className='icon'>
										<span className='fa-stack'>
											<i className='fas fa-user-circle' />
										</span>
									</span>
								</Link>
							) : (
								<div className='navbar-item has-dropdown is-hoverable'>
									<div role='menuitem' className='navbar-link'>
										Hola {user.name}!
									</div>

									<div className='navbar-dropdown'>
										<a href='#!' className='navbar-item'>
											<i className='fas fa-user' /> Mi perfil
										</a>
										<hr className='navbar-divider' />
										<div
											role='menuitem'
											className='navbar-item'
											onClick={handleLogout}
										>
											<i className='fas fa-user' /> Salir
										</div>
									</div>
								</div>
							)}

							<div role='menuitem' className='nav__item has-text-dark'>
								<span className='icon'>
									<span className='fa-stack'>
										<i className='fas fa-shopping-cart' />
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
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
)(Navbar);
