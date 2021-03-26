const app = require('./app.js');
const mongoDbConnect = require('./databaseConfig.js');


mongoDbConnect.then(() => {
    console.log('Application connected to the database');
    app.listen(process.env.PORT, 'localhost', (err) => {
        if (!err){
            console.log('server running on port number: '+ process.env.PORT); 
        }          
    });
}).catch(err => {
    console.log('Database Connection Error');
    process.exit(1);
})


