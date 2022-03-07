import React, { useState, useEffect } from 'react';
import './LatestEpisode.css';
import axios from 'axios';
import UnderlinedHeading from './ui/UnderlinedHeading';

function LatestEpisode() {
	const [podcast, setPodcast] = useState({});
	const [podcastDate, setPodcastDate] = useState({});
	const [youTubeEmbedUrl, setYouTubeEmbedUrl] = useState('');

	useEffect(() => {
		const url =
			'https://the-sons-of-barb-api.herokuapp.com/api/podcasts/getLatest';
		axios.get(url).then((response) => {
			setPodcast(response.data);
			setPodcastDate(getDateFormats(response.data.date));
			setYouTubeEmbedUrl(getYouTubeEmbedUrl(response.data.youTubeUrl));
		});
	}, []);

	const getDateFormats = (date) => {
		const jsDate = new Date(date);

		const result = {
			day: jsDate.getDay(),
			month: jsDate.toLocaleString('en-us', { month: 'short' }),
			year: jsDate.getFullYear(),
		};

		return result;
	};

	const getYouTubeEmbedUrl = (youTubeUrl) => {
		const youTubeId = youTubeUrl.split(
			'https://www.youtube.com/watch?v='
		)[1];

		return `https://www.youtube.com/embed/${youTubeId}`;
	};

	return (
		<div id="latest-episode" className="container">
			<div className="row">
				<div className="col">
					<UnderlinedHeading>Latest Episode</UnderlinedHeading>

					<div className="latest-episode__info">
						<div className="latest-episode__date">
							<div className="latest-episode__day">
								{podcastDate.day}
							</div>
							<div className="latest-episode__month-year">
								{podcastDate.month}, {podcastDate.year}
							</div>
						</div>
						<div className="latest-episode__title">
							{podcast.title}
						</div>
					</div>

					<div className="latest-episode__video">
						<iframe
							width="560"
							height="315"
							src={youTubeEmbedUrl}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LatestEpisode;
