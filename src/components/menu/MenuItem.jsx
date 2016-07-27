import React, { PropTypes } from 'react';
import {IndexLink} from 'react-router';

const MenuItem = (props) => {
	return (
		<IndexLink className="btn" to={props.address} activeClassName="btn-primary">{props.title}</IndexLink>
	);
}

MenuItem.propTypes = {
	address: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default MenuItem;