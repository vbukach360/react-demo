import React, { PropTypes } from 'react';
import Modal from './Modal.jsx';

const ModalPage = () => {
	const modalData = {
		header: 'Hello World',
		content: 'This is modal page',
		id: 'randomId'
	};

	const showModal = () => {
		$('#' + modalData.id).modal('show');
	};

	return (
		<div className="jumbotron">
			<h4>This is Modal page</h4>
			<input value="Show modal dialog" type="button" className="btn btn-danger" onClick={showModal} />
			<Modal header={modalData.header} content={modalData.content} id={modalData.id} /> 
		</div>
	);
};

export default ModalPage;