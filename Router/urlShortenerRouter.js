const express = require('express');
const {shortLink, redirectShortLink} = require('../Controller/shortURLController');

const shortURLRouter = express.Router();

shortURLRouter.post('/shortURL', shortLink);
shortURLRouter.get('/:shortId', redirectShortLink);

module.exports =shortURLRouter;

  