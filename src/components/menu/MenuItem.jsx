import React from 'react';
import {IndexLink} from 'react-router';

const MenuItem = (props) => {
	return (
		<IndexLink className="btn" to={props.address} activeClassName="btn-primary">{props.title}</IndexLink>
	);
}

export default MenuItem;