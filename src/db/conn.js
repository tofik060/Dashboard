const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI, {useNewUrlParser : true})
    .then(() => {
        console.log('Database connection..');
    }).catch((error) => {
        console.log('Database are not connected', error);
    })