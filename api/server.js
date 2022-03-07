require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log(`The Sons of Barb API listening on port ${port}`);
});

mongoose
	.connect(process.env.MONGO_URL, { useNewUrlParser: true })
	.then(() => {
		console.log('Connected to MongoDB.');
	})
	.catch((error) => {
		console.log('Error connecting to MongoDB.');
	});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use('/api/podcasts', require('./routes/podcast.route'));
