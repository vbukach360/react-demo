import React, { PropTypes } from 'react';
import TabMenuItem from './TabMenuItem.jsx';

const TabMenu = (props) => {
	let items = props.tabs.map((item) => {
		return (
				<TabMenuItem key={item.id} id={item.id} title={item.title}></TabMenuItem>
			);
	});

	return (
		<div className="ui tabular menu">
			{items}
		</div>
	);
}

TabMenu.propTypes = {
	tabs: PropTypes.array.isRequired
};

export default TabMenu;