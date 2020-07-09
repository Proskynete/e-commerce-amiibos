import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LOGO from '../../assets/images/logo.png';
import { loginAction } from '../../actions';
import { defaultValues } from '../../config/default_values';
import './index.scss';

const Login = (props) => {
	const { loginMethod, login_state, history } = props;
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const [button, setButton] = useState(false);

	const handleSubmit = () => {
		setButton(true);

		loginMethod({
			email: credentials.email,
			password: credentials.password,
		});
	};

	useEffect(() => {
		setCredentials({
			email: defaultValues.login.email,
			password: defaultValues.login.password,
		});

		if (login_state) {
			history.push('/');
		}
	}, [history, login_state]);

	return (
		<div className='content login'>
			<div className='columns is-narrow-desktop'>
				<div className='column is-4 is-offset-4'>
					<div className='card'>
						<div className='card-content'>
							<div className='content'>
								<img className='login__logo' src={LOGO} alt='Amiibo logo' />
							</div>

							<div className='content'>
								<div className='field'>
									<p className='control has-icons-left'>
										<input
											className='input'
											type='email'
											defaultValue={credentials.email}
											placeholder='Correo electrónico'
										/>
										<span className='icon is-small is-left'>
											<i className='fas fa-envelope' />
										</span>
									</p>
								</div>
								<div className='field'>
									<p className='control has-icons-left'>
										<input
											className='input'
											type='password'
											defaultValue={credentials.password}
											placeholder='*********'
										/>
										<span className='icon is-small is-left'>
											<i className='fas fa-lock' />
										</span>
									</p>
								</div>
								<div className='field' style={{ marginTop: '50px' }}>
									<p className='control'>
										<button
											type='submit'
											className={`button is-info ${
												button ? 'is-loading' : null
											}`}
											disabled={button}
											onClick={handleSubmit}
										>
											Iniciar sesión
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	login_state: PropTypes.bool.isRequired,
	loginMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		login_state: state.login.has_login,
	}),
	(dispatch) => ({
		loginMethod: loginAction(dispatch),
	}),
)(Login);
