import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModalAction } from '../../actions';

const CustomModal = (props) => {
	const { show, hideModalMethod } = props;
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setShowModal(show);
	}, [show]);

	return (
		<Modal show={showModal} onHide={() => hideModalMethod()} centered>
			<Modal.Header closeButton>
				<Modal.Title>Tu carrito</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Acá va una tabla</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='primary' onClick={() => hideModalMethod()}>
					Save Changes
				</Button>
				<Button variant='secondary' onClick={() => hideModalMethod()}>
					Cerrar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

CustomModal.propTypes = {
	show: PropTypes.bool.isRequired,
	hideModalMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		show: state.modalStore.show,
	}),
	(dispatch) => ({
		hideModalMethod: hideModalAction(dispatch),
	}),
)(CustomModal);
