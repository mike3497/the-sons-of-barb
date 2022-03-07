import React from 'react';
import SocialMediaButton from '../ui/SocialMediaButton';
import './SocialMedia.css';

function SocialMedia() {
	const backgroundColor = '#553d2e';

	return (
		<div className="footer-social-media">
			<SocialMediaButton link="" backgroundColor={backgroundColor}>
				<i className="fa-brands fa-youtube"></i>
			</SocialMediaButton>
			<SocialMediaButton link="" backgroundColor={backgroundColor}>
				<i className="fa-brands fa-spotify"></i>
			</SocialMediaButton>
			<SocialMediaButton link="" backgroundColor={backgroundColor}>
				<i className="fa-solid fa-podcast"></i>
			</SocialMediaButton>
			<SocialMediaButton link="" backgroundColor={backgroundColor}>
				<i className="fa-brands fa-facebook"></i>
			</SocialMediaButton>
			<SocialMediaButton link="" backgroundColor={backgroundColor}>
				<i className="fa-brands fa-instagram"></i>
			</SocialMediaButton>
		</div>
	);
}

export default SocialMedia;
