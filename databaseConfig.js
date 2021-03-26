const mongoose = require('mongoose');

const dbConnect = mongoose.connect(process.env['DB_CONNECTION_STRING'],{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 })
 
module.exports = dbConnect;