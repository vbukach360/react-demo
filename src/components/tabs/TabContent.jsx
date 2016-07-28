import React, { PropTypes } from 'react';

const TabContent = (props) => {
	return (
			<div className="ui tab" data-tab={props.name}>
				<p>{props.content}</p>
			</div>
	);
}

TabContent.propTypes = {
	content: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default TabContent;