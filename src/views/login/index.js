import React, { useState, useEffect } from 'react';
import LOGO from '../../assets/images/logo.png';
import './index.scss';

const Login = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [button, setButton] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setButton(true);

		setTimeout(() => {
			const obj = {
				id: '1',
				email: 'eduardo.alvarez@papajohns.cl',
				name: 'Eduardo',
				lastname: 'Alvarez',
			};
			localStorage.setItem('user', JSON.stringify(obj));
			setButton(false);
		}, 2000);
	};

	useEffect(() => {
		setCredentials({
			email: 'eduardo.alvarez@papajohns.cl',
			password: 'frontend2020',
		});
	}, []);

	return (
		<div className='content login'>
			<div className='columns is-narrow-desktop'>
				<div className='column is-4 is-offset-4'>
					<div className='card'>
						<div className='card-content'>
							<div className='content'>
								<img className='login__logo' src={LOGO} alt='Amiibo logo' />
							</div>
							<form onSubmit={handleSubmit}>
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
											>
												Iniciar sesión
											</button>
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
