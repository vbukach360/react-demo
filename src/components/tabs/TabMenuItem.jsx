import React, { PropTypes } from 'react';

const TabMenuItem = (props) => {
	return (
		<div className="item" data-tab={props.id}>{props.title}</div>
	);
}

TabMenuItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default TabMenuItem;