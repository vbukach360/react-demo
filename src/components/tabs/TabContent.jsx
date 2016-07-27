import React, { PropTypes } from 'react';

const TabContent = (props) => {
	return (
			<div className="ui tab" data-tab={props.id}>
				<p>{props.content}</p>
			</div>
	);
}

TabContent.propTypes = {
	content: PropTypes.string.isRequired
};

export default TabContent;