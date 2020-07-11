import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { loginAction } from '../../actions';
import { defaultValues } from '../../config/default_values';
import Loader from '../../components/loader';
import LOGO from '../../assets/images/logo.png';
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
		<Container fluid className='login'>
			<Row className='justify-content-md-center'>
				<Col xs md={{ span: 3 }}>
					<Card>
						<Card.Body>
							<div className='login__logo'>
								<img className='' src={LOGO} alt='Amiibo logo' />
							</div>
							<Form className='login__form'>
								<Form.Group controlId='email'>
									<Form.Control
										type='email'
										placeholder='Correo electrónico'
										defaultValue={credentials.email}
									/>
								</Form.Group>

								<Form.Group controlId='password'>
									<Form.Control
										type='password'
										placeholder='*********'
										defaultValue={credentials.password}
									/>
								</Form.Group>

								<Button
									variant='outline-info'
									disabled={button}
									onClick={handleSubmit}
								>
									{button ? <Loader text='Verificando...' /> : 'Iniciar sesión'}
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

Login.propTypes = {
	login_state: PropTypes.bool.isRequired,
	loginMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		login_state: state.loginStore.has_login,
	}),
	(dispatch) => ({
		loginMethod: loginAction(dispatch),
	}),
)(Login);
