const Podcast = require('../models/podcast.model');

// CRUD
module.exports.create = async (req, res) => {
	try {
		const podcast = new Podcast({
			title: req.body.title,
			description: req.body.description,
			date: req.body.date,
			duration: req.body.duration,
			thumbnailUrl: req.body.thumbnailUrl,
			youTubeUrl: req.body.youTubeUrl,
			spotifyUrl: req.body.spotifyUrl,
			applePodcastUrl: req.body.applePodcastUrl,
		});
		const result = await podcast.save();

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.read = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Podcast.findById(id);
		if (!result) {
			return res.status(404).json(`Podcast with id:${id} not found.`);
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.update = async (req, res) => {
	try {
		const id = req.params.id;

		const podcast = await Podcast.findById(id);
		if (!podcast) {
			return res.status(404).json(`Podcast with id:${id} not found.`);
		}

		podcast.title = req.body.title || podcast.title;
		podcast.description = req.body.description || podcast.description;
		podcast.date = req.body.date || podcast.date;
		podcast.duration = req.body.duration || podcast.duration;
		podcast.thumbnailUrl = req.body.thumbnailUrl || podcast.thumbnailUrl;
		podcast.youTubeUrl = req.body.youTubeUrl || podcast.youTubeThumbnailUrl;
		podcast.spotifyUrl = req.body.spotifyUrl || podcast.spotifyUrl;
		podcast.applePodcastUrl =
			req.body.applePodcastUrl || podcast.applePodcastUrl;

		const result = await podcast.save();
		if (!result) {
			return res.status(400).json('Podcast could not be updated');
		}

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.remove = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Podcast.deleteOne({ _id: id });
		return res.send(result);
	} catch (exception) {}
};

module.exports.exists = async (req, res) => {
	try {
		const id = req.params.id;

		const result = await Podcast.findById(id);
		if (!result) {
			return res.status(404).json(false);
		}

		return res.status(200).json(true);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.getAll = async (req, res) => {
	try {
		const result = await Podcast.find(
			{},
			{},
			{ sort: { publishedDate: -1 } }
		);

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};
// End CRUD

module.exports.getLatest = async (req, res) => {
	try {
		const result = await Podcast.findOne({}, {}, { sort: { date: -1 } });

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};

module.exports.getMore = async (req, res) => {
	try {
		const result = await Podcast.find(
			{},
			{},
			{ sort: { date: -1 }, skip: 1, limit: 3 }
		);

		return res.status(200).json(result);
	} catch (exception) {
		return res.status(400).json(exception);
	}
};
