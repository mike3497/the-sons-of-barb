import React, { useState, useEffect } from 'react';
import './MorePodcasts.css';
import axios from 'axios';
import PodcastCard from './ui/PodcastCard';
import UnderlinedHeading from './ui/UnderlinedHeading';

function MorePodcasts() {
	const [podcasts, setPodcasts] = useState([]);

	useEffect(() => {
		const url =
			'https://the-sons-of-barb-api.herokuapp.com/api/podcasts/getMore';
		axios.get(url).then((response) => {
			setPodcasts(response.data);
		});
	}, []);

	return (
		<div id="more-podcasts" className="container">
			<div className="row">
				<div className="col">
					<UnderlinedHeading>More Podcasts</UnderlinedHeading>
				</div>
			</div>
			<div className="row">
				{podcasts.map((podcast) => (
					<div key={podcast._id} className="col-lg-4">
						<PodcastCard podcast={podcast} />
					</div>
				))}
			</div>
		</div>
	);
}

export default MorePodcasts;
