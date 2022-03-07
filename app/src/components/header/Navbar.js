import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<nav className="header-navbar">
			<ul className="header-navbar__ul">
				<li className="header-navbar__li">
					<a
						className="header-navbar__a active"
						href="#welcome-message"
					>
						Home
					</a>
				</li>
				<li className="header-navbar__li">
					<a className="header-navbar__a" href="#latest-episode">
						Latest Episode
					</a>
				</li>
				<li className="header-navbar__li">
					<a className="header-navbar__a" href="#more-podcasts">
						More Podcasts
					</a>
				</li>
				<li className="header-navbar__li">
					<a className="header-navbar__a" href="#about">
						About
					</a>
				</li>
				<li className="header-navbar__li">
					<a className="header-navbar__a" href="#reviews">
						Reviews
					</a>
				</li>
				<li className="header-navbar__li">
					<a className="header-navbar__a" href="#contact-us">
						Contact Us
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
