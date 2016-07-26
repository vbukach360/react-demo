import React from 'react';

import TabMenu from './TabMenu.jsx';
import TabContent from './TabContent.jsx';

import $ from 'jquery'

$.fn.tab = require('semantic-ui-tab');

class Tabs extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		let contentItems = this.props.tabs.map((item) => {
			return (
				<TabContent key={item.id} tabId={item.id} content={item.content}></TabContent>
			);
		});

		return (
			<div>
				<TabMenu tabs={this.props.tabs} />
				{contentItems}
			</div>
		);
	}

	componentDidMount () {
		$('.tabular.menu .item').tab();
	}
}

export default Tabs;