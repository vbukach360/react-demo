import React, { PropTypes } from 'react';

const Modal = (props) => {
	return (
			<div className="ui modal" id={props.id} >
				{props.children}
			</div>
	);
}

Modal.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.array.isRequired
};

export default Modal;