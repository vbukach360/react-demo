import React, { PropTypes } from 'react';
import Modal from './Modal.jsx';

class ModalPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const modalData = {
			header: 'Hello World',
			content: 'This is modal page',
			id: 'randomId'
		};

		return (
			<div className="jumbotron">
				<h4>This is Modal page</h4>
				<input value="Show modal dialog" type="button" className="btn btn-danger" onClick={this.showModal.bind(this, modalData)} />
				<Modal header={modalData.header} content={modalData.content} id={modalData.id} /> 
			</div>
		);
	}

	showModal (modalData) {
		$('#' + modalData.id).modal('show');
	}
}

export default ModalPage;