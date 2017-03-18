const express = require('express');
const path = require('path');

const app = express();

const APP_ROOT = path.dirname(__dirname);

app.use('/static', express.static(path.join(APP_ROOT, 'public')));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry, can't find that!");
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Sorry, something went wrong.');
});

app.listen(3000, function () {
    console.log('Server started, listening on port 3000.');
});
