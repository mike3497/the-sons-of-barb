import React from 'react';
import MainImage from './MainImage';
import Navbar from './Navbar';
import TopBar from './TopBar';

function Header() {
	return (
		<header>
			<TopBar />
			<MainImage />
			<Navbar />
		</header>
	);
}

export default Header;
