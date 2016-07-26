import React from 'react';
import TabMenuItem from './TabMenuItem.jsx';

const TabMenu = (props) => {
	let items = props.tabs.map((item) => {
		return (
				<TabMenuItem key={item.id} tabId={item.id} title={item.title}></TabMenuItem>
			);
	});

	return (
		<div className="ui tabular menu">
			{items}
		</div>
	);
}


export default TabMenu;