import React, { PropTypes } from 'react';

const TabMenuItem = (props) => {
	return (
		<div className="item" data-tab={props.name}>{props.title}</div>
	);
}

TabMenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default TabMenuItem;