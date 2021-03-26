const shortURL = require('../Model/shortURLModel');
const validUrl = require('valid-url');
const shortId = require('shortid');


module.exports.shortLink = async (req, res, next) => {
    var host = req.get('host');      
    const longURL = req.body.longURL;
    if (validUrl.isUri(longURL)){
        try {
            const data = await shortURL.create({
                longURL: longURL,
                shortId: shortId()
            });

            return res.json({            
                status: 'success',
                data: `http://${host}/${data.shortId}`
            });
        } 
        catch(err) {
            res.statusCode = 500;
            return res.json({
                status: 'error',
                message: 'Something went wrong. Please try again'
            })        
        }
    } 
    else {
        res.statusCode = 400;
        return res.json({
            status: 'fail',
            message: 'Please provide valid url'
        })
    }
}

module.exports.redirectShortLink = async (req, res, next) => {
    const shortId = req.params.shortId;
    try {
        const dataEntry = await shortURL.findOne({shortId});
        if(dataEntry) {
            res.redirect(dataEntry.longURL);
        }
        else {
            res.statusCode = 400;
            return res.json({
                status: 'fail',
                message: 'Nothing found for the given url. Please check the url and try again.'
            })
        }
    }
    catch(err) {
        res.statusCode = 500;
        return res.json({
            status: 'error',
            message: 'Something went wrong. Please try again'
        })
    }    
}