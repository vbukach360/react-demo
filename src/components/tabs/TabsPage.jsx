import React from 'react';
import Tabs from './Tabs.jsx';

const tabs = [
				{
					id: 'tab-name',
					title: 'Tab Name',
					content: 'Hello'
				},
				{ 
					id: 'tab-name2',
					title: 'Tab Name2',
					content: 'wORLD'
				}
			];

const TabsPage = () => {
	return (
		<div className="jumbotron">
			<h4>This is tabs page</h4>
			<Tabs tabs={tabs} activeTab="tab-name" />
			<Tabs tabs={tabs} activeTab="tab-name2" />
		</div>
	);
}

export default TabsPage;