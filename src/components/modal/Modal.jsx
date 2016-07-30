import React, { PropTypes } from 'react';

const Modal = (props) => {
	return (
			<div className="ui modal" id={props.id} >
				<i className="close icon"></i>
				{props.children}
			</div>
	);
}

Modal.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
};

export default Modal;