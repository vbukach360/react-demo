import React, { PropTypes } from 'react';

const TabContent = (props) => {
	const classNames = 'ui tab' + (props.isActive ? ' active' : '');
	return (
			<div className={classNames} data-tab={props.name}>
				<p>{props.content}</p>
			</div>
	);
};

TabContent.propTypes = {
	content: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired
};

export default TabContent;