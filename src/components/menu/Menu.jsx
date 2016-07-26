import React from 'react';
import MenuItem from './MenuItem.jsx';

const Menu = (props) => {
	var menuItems = props.items.map((item) => {
		return (<MenuItem key={item.id} address={item.address} title={item.title} />);
	});

	return (<div>{menuItems}</div>);
}

export default Menu;