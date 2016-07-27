import React, { PropTypes } from 'react';

const ModalContent = (props) => {
	return (
		<div className="content">
			{props.content}
		</div>
	);
}

ModalContent.propTypes = {
	content: PropTypes.string.isRequired
};

export default ModalContent;