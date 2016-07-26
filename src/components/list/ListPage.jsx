import React from 'react';
import List from './List.jsx';

class ListPage extends React.Component {
	render () {
		return (
			<div className="jumbotron">
				<h4>This is List page</h4>
				<List />
			</div>
		);
	}
}

export default ListPage;