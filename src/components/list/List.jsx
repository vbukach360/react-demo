import React, {Component} from 'react';
import ListItem from './ListItem.jsx';

const ingredients = [{ id: 1, text: 'tomato' } , { id: 2, text: 'potato'}];

class List extends React.Component {
	render() {
		let listItems = ingredients.map((item) => {
			return <ListItem key={item.id} ingredient={item.text} />;
		});

		return (<ul>{listItems}</ul>);
	}
}

export default List;