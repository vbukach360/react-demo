import React, {Component, PropTypes } from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {
	const listItems = props.ingredients.map((item) => {
		return <ListItem key={item.id} ingredient={item.text} />;
	});

	return (
			<ul>{listItems}</ul>
	);
}

List.propTypes = {
	ingredients: PropTypes.array.isRequired
};

export default List;