import React, {PropTypes} from 'react';
import Menu from './menu/Menu.jsx';

const menuItems = [
{
	address: '/',
	title: 'Home',
	id: 'home'
}, {
	address: '/tasks/list',
	title: 'List',
	id: 'list'
}, {
	address: '/tasks/tabs',
	title: 'Tabs',
	id: 'tabs'
}, {
	address: '/tasks/modal',
	title: 'Modal',
	id: 'modal'
}];


class App extends React.Component {
	render () {
		return (
			<div className="container-fluid">
				<Menu items={menuItems}></Menu>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;