const express = require('express');
const path = require('path');
require('dotenv').config({path: './config.env'});
const shortURLRouter = require('./Router/urlShortenerRouter');

const app = express();

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, 'public')))


app.use('/', shortURLRouter);

app.use('*', (req, res) => {
    res.statusCode=404;
    res.write(`<h1>Sorry no page found.</h1>`);
})

module.exports =  app;
