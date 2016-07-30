import React, { PropTypes } from 'react';

const ModalContent = (props) => {
	return (
		<div className="content">
			{props.children}
		</div>
	);
}

ModalContent.propTypes = {
	children: PropTypes.element.isRequired
};

export default ModalContent;