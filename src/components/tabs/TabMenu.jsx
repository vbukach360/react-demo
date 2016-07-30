import React, { PropTypes } from 'react';
import TabMenuItem from './TabMenuItem.jsx';

const TabMenu = (props) => {
	let items = props.tabs.map((item) => {
		return (
				<TabMenuItem  handleTabClick={props.handleTabClick} key={item.id} name={item.id} title={item.title} activeTab={props.activeTab} />
			);
	});

	return (
		<div className="ui tabular menu">
			{items}
		</div>
	);
}

TabMenu.propTypes = {
	tabs: PropTypes.array.isRequired,
	activeTab: PropTypes.string.isRequired,
	handleTabClick: PropTypes.func.isRequired
};

export default TabMenu;