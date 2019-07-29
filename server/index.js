const express = require('express');
var cors = require('cors');
const app = express();
const port = 8000;

app.use(
	cors({
		origin: 'http://localhost:8080'
	})
);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
