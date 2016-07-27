import React, { PropTypes } from 'react';

const ModalHeader = (props) => {
	return (
		 <div className="header">{props.content}</div>
	);
}

ModalHeader.propTypes = {
	content: PropTypes.string.isRequired
};

export default ModalHeader;