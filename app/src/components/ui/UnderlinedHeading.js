import React from 'react';
import './UnderlinedHeading.css';

function UnderlinedHeading(props) {
	return <h4 className="underlined-heading">{props.children}</h4>;
}

export default UnderlinedHeading;
