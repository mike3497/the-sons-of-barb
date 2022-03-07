import React from 'react';
import './SocialMediaButton.css';

function SocialMediaButton(props) {
	return (
		<a
			href={props.link}
			className="social-media-button"
			style={{ backgroundColor: props.backgroundColor }}
		>
			{props.children}
		</a>
	);
}

export default SocialMediaButton;
