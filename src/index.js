const express = require('express');
const path = require('path');

const app = express();

const APP_ROOT = path.dirname(__dirname);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Server started, listening on port 3000.');
});
