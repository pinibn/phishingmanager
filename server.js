const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/default');
const phishRoute = require('./lib/routes/phish.route');


const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));


//Routes (APIs)
app.use('', phishRoute);

mongoose.connect(config.mongodb.url)
.then( () => {
    console.log('db connection established successfully');
    app.listen(config.server.port, ()=> {
        console.log('Phishing Manager running on port ' + config.server.port);
})
}).catch(err => {
    console.log('Error connecting DB, terminating. msg: ', err);
});