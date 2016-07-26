import React from 'react';

const ListItem = (props) => {
	return (
			<li>
				<h4>{props.ingredient}</h4>
			</li>
	);
}

export default ListItem;