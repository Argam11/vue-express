const express = require('express');
var cors = require('cors');
const app = express();
const port = 8000;

app.use(
	cors({
		origin: 'http://localhost:8080'
	})
);

app.get('/', (req, res) => {
	try {
		// res.status(200).send('Success!');
		throw 'Error!!!';
	} catch (error) {
		res.status(400).send(error);
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
