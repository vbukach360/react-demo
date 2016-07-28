import React, {PropTypes} from 'react';

import TabMenu from './TabMenu.jsx';
import TabContent from './TabContent.jsx';

class Tabs extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		let contentItems = this.props.tabs.map((item) => {
			return (
				<TabContent key={item.id} name={this.props.id + '_' + item.id} content={item.content}></TabContent>
			);
		});

		return (
			<div id={this.props.id}>
				<TabMenu tabs={this.props.tabs} parentId={this.props.id} />
				{contentItems}
			</div>
		);
	}

	componentDidMount () {
		$('#' + this.props.id + ' .tabular.menu .item').tab();
		$('#' + this.props.id + ' .tab[data-tab="' + this.props.id + '_' + this.props.selectedTab+ '"]').addClass('active');
		$('#' + this.props.id + ' .item[data-tab="' + this.props.id + '_' + this.props.selectedTab + '"]').addClass('active');
	}
}

Tabs.propTypes = {
	tabs: PropTypes.array.isRequired,
	selectedTab: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
};

export default Tabs;