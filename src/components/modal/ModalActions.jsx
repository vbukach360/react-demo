import React, { PropTypes } from 'react';

const ModalActions = (props) => {
	const actions = props.actions.map((item) => {
		const actionClasses = 'ui button ' + item.type;
		return <div key={item.type} className={actionClasses} onClick={item.clickHandler}>{item.text}</div>
	});

	return (
		<div className="actions">
			{ actions }
		</div>
	);
};

ModalActions.propTypes = {
	actions: PropTypes.array.isRequired
};

export default ModalActions;