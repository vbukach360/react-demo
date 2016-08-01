import React, {PropTypes} from 'react';

const Loader = (props) => {
	const classes = 'ui dimmer' +  (props.isActive ? ' active' : '');
	return (
			<div className="ui segment">
				<div className={classes}>
					<div className="ui text loader">{props.loadingText}</div>
				</div>
			</div>
	);
};


Loader.propTypes = {
	isActive: PropTypes.bool.isRequired,
	loadingText: PropTypes.string.isRequired
};

export default Loader;