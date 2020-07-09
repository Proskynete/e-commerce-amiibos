import React, { useState } from 'react';
import LOGO from '../assets/images/logo.png';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleSetMobileMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav
			className="navbar is-fixed-top"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<a href="/" className="navbar-item">
					<img src={LOGO} width="112" height="28" alt="Amiibos logo" />
				</a>

				<div
					role="menuitem"
					className="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navigation"
					onClick={handleSetMobileMenu}
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</div>
			</div>

			<div
				id="navigation"
				className={`${showMenu ? 'navbar-menu is-active' : 'navbar-menu'}`}
			>
				<div className="navbar-start">
					<a href="#!" className="navbar-item">
						Inicio
					</a>

					<a href="#!" className="navbar-item">
						Documentation
					</a>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a href="#!" className="is-primary">
								<span className="icon">
									<span className="fa-stack">
										<i className="fas fa-user" />
									</span>
								</span>
							</a>
							<a href="#!" className="is-light">
								<span className="icon">
									<span className="fa-stack">
										<i className="fas fa-shopping-cart" />
									</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
