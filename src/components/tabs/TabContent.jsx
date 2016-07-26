import React from 'react';

const TabContent = (props) => {
	return (
			<div className="ui tab" data-tab={props.tabId}>
				<p>{props.content}</p>
			</div>
	);
}

export default TabContent;