import React, { PropTypes } from 'react';

import Modal from './Modal.jsx';
import ModalContent from './ModalContent.jsx';
import ModalHeader from './ModalHeader.jsx';
import ModalActions from './ModalActions.jsx';

const ModalPage = () => {
	const modalData = {
		id: 'randomId',
		actions: [
			{ 
				type: 'approve',
				text: 'Approve', 
				clickHandler: () => {

				}
			}, 
			{
				type: 'cancel',
				text: 'Cancel',
				clickHandler: () => {

				}
			}
		]
	};

	const showModal = () => {
		$('#' + modalData.id).modal('show');
	};

	return (
		<div className="jumbotron">
			<h4>This is Modal page</h4>
			<input value="Show modal dialog" type="button" className="btn btn-danger" onClick={showModal} />
			<Modal id={ modalData.id } >
				<i className="close icon"></i>
				<ModalHeader>
					<h2>Hello World</h2>
				</ModalHeader>
				<ModalContent>
					<h4>Modal content</h4>
				</ModalContent>
				<ModalActions actions={modalData.actions} />
			</Modal>
		</div>
	);
};

export default ModalPage;