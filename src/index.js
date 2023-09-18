require('dotenv').config();
const express = require('express');
const app = express();
require('./db/conn')
const port = process.env.PORT || 9000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")))
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))

//console.log(path.join(__dirname, "./uploads"))

const router = require('./routes/router')
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

app.get('/',(req, res) => {
    res.send(" Invalid endpoint ")
})

// Error Handle

app.use(function(err, req, res, next){
    console.err(err.message);
    res.send(err.message);
    if(!err.message) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})