import React from 'react';
import './PodcastCard.css';
import SocialMediaButton from './SocialMediaButton';

function PodcastCard(props) {
	const podcast = props.podcast;

	return (
		<div className="podcast-card">
			<a className="podcast-card__image" href={podcast.youTubeUrl}>
				<img src={podcast.thumbnailUrl} alt={podcast.title} />
			</a>
			<a className="podcast-card__title" href={podcast.youTubeUrl}>
				{props.podcast.title}
			</a>
			<p className="podcast-card__info">
				<span className="podcast-card__date">
					<i className="fa-solid fa-calendar-days"></i>
					{new Date(podcast.date).toLocaleDateString('en-us', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</span>
				<span className="podcast-card__duration">
					<i className="fa-solid fa-stopwatch"></i>
					{podcast.duration}
				</span>
			</p>
			<p
				className="podcast-card__description"
				title={podcast.description}
			>
				{podcast.description}
			</p>
			<div className="podcast-card__links">
				<SocialMediaButton link={podcast.youTubeUrl}>
					<i className="fa-brands fa-youtube"></i>
				</SocialMediaButton>
				<SocialMediaButton link={podcast.spotifyUrl}>
					<i className="fa-brands fa-spotify"></i>
				</SocialMediaButton>
				<SocialMediaButton link={podcast.applePodcastUrl}>
					<i className="fa-solid fa-podcast"></i>
				</SocialMediaButton>
			</div>
		</div>
	);
}

export default PodcastCard;
