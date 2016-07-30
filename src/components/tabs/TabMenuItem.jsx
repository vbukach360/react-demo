import React, { PropTypes } from 'react';

const TabMenuItem = (props) => {
	const handleClick = () => {
		props.handleTabClick(props.name)
	};

	const classNames = 'item' + ((props.activeTab == props.name) ? ' active' : '');

	return (
		<div className={classNames} onClick={handleClick}  data-tab={props.name}>{props.title}</div>
	);
}

TabMenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	handleTabClick: PropTypes.func.isRequired
};

export default TabMenuItem;