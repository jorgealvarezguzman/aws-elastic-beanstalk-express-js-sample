const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my first pipeline on AWS! With a change.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
