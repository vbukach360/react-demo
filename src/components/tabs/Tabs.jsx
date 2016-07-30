import React, {PropTypes} from 'react';

import TabMenu from './TabMenu.jsx';
import TabContent from './TabContent.jsx';

class Tabs extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			activeTab: props.activeTab
		};

		this.handleTabClick = this.handleTabClick.bind(this);
	}

	handleTabClick (activeTab) {
		this.setState({activeTab: activeTab});
	}

	render () {
		let contentItems = this.props.tabs.map((item) => {
			const isActive = item.id == this.state.activeTab;

			return (
				<TabContent isActive={isActive} key={item.id} name={item.id} content={item.content} />
			);
		});

		return (
			<div id={this.props.id}>
				<TabMenu tabs={this.props.tabs} activeTab={this.state.activeTab} handleTabClick={this.handleTabClick} />
				{contentItems}
			</div>
		);
	}
}

Tabs.propTypes = {
	tabs: PropTypes.array.isRequired,
	activeTab: PropTypes.string.isRequired
};

export default Tabs;