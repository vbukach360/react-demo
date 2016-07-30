import React, { PropTypes } from 'react';

const ModalHeader = (props) => {
	return (
		<div className="header">
			{props.children}
		</div>
	);
}

ModalHeader.propTypes = {
	children: PropTypes.element.isRequired
};

export default ModalHeader;