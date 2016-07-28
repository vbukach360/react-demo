import React, { PropTypes } from 'react';
import List from './List.jsx';

const ingredients = [{ id: 1, text: 'tomato' } , { id: 2, text: 'potato'}];

const ListPage = () => {
	return (
		<div className="jumbotron">
			<h4>This is List page</h4>
			<List ingredients={ingredients} />
		</div>
	);
};

export default ListPage;