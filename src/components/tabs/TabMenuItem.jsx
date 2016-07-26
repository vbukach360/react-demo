import React from 'react';

const TabMenuItem = (props) => {
	return (
		<div className="item" data-tab={props.tabId}>{props.title}</div>
	);
}

export default TabMenuItem;