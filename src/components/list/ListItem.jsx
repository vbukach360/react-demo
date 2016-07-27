import React, { PropTypes } from 'react';

const ListItem = (props) => {
	return (
			<li>
				<h4>{props.ingredient}</h4>
			</li>
	);
}

ListItem.propTypes = {
	ingredient: PropTypes.string.isRequired
};

export default ListItem;