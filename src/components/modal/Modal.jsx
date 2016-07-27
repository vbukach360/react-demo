import React, { PropTypes } from 'react';

import ModalContent from './ModalContent.jsx';
import ModalHeader from './ModalHeader.jsx';

const Modal = (props) => {
	return (
			<div className="ui modal" id={props.id} >
				<i className="close icon"></i>
				<ModalHeader content={props.header} />
				<ModalContent content={props.content} />
			</div>
	);
}

Modal.propTypes = {
	id: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

export default Modal;