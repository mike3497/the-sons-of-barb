const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	thumbnailUrl: {
		type: String,
		required: true,
	},
	youTubeUrl: {
		type: String,
		required: true,
	},
	spotifyUrl: {
		type: String,
		required: true,
	},
	applePodcastUrl: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Podcast', podcastSchema);
