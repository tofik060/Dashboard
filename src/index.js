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
app.use(cors({
    origin: "http://localhost:4200",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

const router = require('./routes/router')
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

app.get('/',(req, res) => {
    res.send(" Invalid endpoint ")
})

// Error Handle

app.use((err, req, res, next) => {
    console.error("Error:", err.message);

    if (!err.statusCode) err.statusCode = 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
});
