import React, {PropTypes} from 'react';
import Menu from './menu/Menu.jsx';

const menuItems = [
{
	address: '/',
	title: 'Home',
	id: 'home'
}, {
	address: 'list',
	title: 'List',
	id: 'list'
}, {
	address: 'tabs',
	title: 'Tabs',
	id: 'tabs'
}];


class App extends React.Component {
	render () {
		return (
			<div>
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