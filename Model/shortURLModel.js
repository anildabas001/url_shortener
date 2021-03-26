const mongoose = require('mongoose');

const shortURLSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true
    },
    longURL: String,
    cretedOn: {
        type: Date,
        default: new Date
    }
});

const shortURL = mongoose.model('shortURL', shortURLSchema);

module.exports = shortURL;