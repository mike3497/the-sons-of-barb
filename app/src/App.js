import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import LatestEpisode from './components/LatestEpisode';
import MorePodcasts from './components/MorePodcasts';
import About from './components/About';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';

function App() {
	return (
		<React.Fragment>
			<Header />
			<main>
				<WelcomeMessage />
				<LatestEpisode />
				<MorePodcasts />
				<About />
				<Reviews />
				<ContactUs />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;
