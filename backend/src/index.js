require('dotenv').config();
const express = require('express');
const app = express();

// Log environment information
const isDevelopment = process.env.NODE_ENV !== 'production';
console.log('='.repeat(50));
console.log(`🚀 Starting server in ${isDevelopment ? 'DEVELOPMENT' : 'PRODUCTION'} mode`);
console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log('='.repeat(50));

require('./db/conn')
const port = process.env.PORT || 9000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors({
    origin: [
        "http://localhost:4200",
        process.env.FRONTEND_URL || "https://your-frontend-app.vercel.app",
        /\.vercel\.app$/
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Only serve uploads if not in Vercel (serverless has limitations with file serving)
if (process.env.VERCEL !== '1') {
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
} else {
    // In Vercel, serve from /tmp/uploads if needed
    app.use('/uploads', express.static('/tmp/uploads'));
}

const router = require('./routes/router')
app.use('/api', router)

// Only start server if not in Vercel (for local development)
if (process.env.VERCEL !== '1') {
    app.listen(port, () => {
        console.log(`✅ Server running at http://localhost:${port}`);
        console.log(`🌍 Environment: ${isDevelopment ? 'Development' : 'Production'}`);
        if (isDevelopment) {
            console.log(`📊 Database: Local MongoDB (mongodb://127.0.0.1:27017/dashboard)`);
        } else {
            console.log(`📊 Database: MongoDB Atlas`);
        }
        console.log('='.repeat(50));
    });
}

app.get('/',(req, res) => {
    res.send(" Invalid endpoint ")
})

// Export the app for Vercel serverless functions
module.exports = app;

// Error Handle

app.use((err, req, res, next) => {
    console.error("Error:", err.message);

    if (!err.statusCode) err.statusCode = 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
});
