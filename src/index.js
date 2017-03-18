const express = require('express');
const path = require('path');

const app = express();

const APP_ROOT = path.dirname(__dirname);

app.set('views', path.join(APP_ROOT, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(APP_ROOT, 'public')));

app.get('/', function (req, res) {
    res.render('home', {
        title: 'Hey',
        message: 'Hello There!',
        fruits: ['Banana', 'Watermelon', 'Strawberry']
    });
});

app.use(function (req, res) {
    res.status(404).send("Sorry, can't find that!");
});

app.use(function (err, req, res) {
    console.error(err.stack);
    res.status(500).send('Sorry, something went wrong.');
});

app.listen(3000, function () {
    console.log('Server started, listening on port 3000.');
});
