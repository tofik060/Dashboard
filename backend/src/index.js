require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Log environment information
const isDevelopment = process.env.NODE_ENV !== 'production';
console.log('='.repeat(50));
console.log(`🚀 Starting server in ${isDevelopment ? 'DEVELOPMENT' : 'PRODUCTION'} mode`);
console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log('='.repeat(50));

const connectDB = require('./db/conn');
const port = process.env.PORT || 9000;

// Middleware to ensure DB connection before handling requests (for serverless)
const ensureDBConnection = async (req, res, next) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            console.log('Database not connected, connecting now...');
            await connectDB();
        }
        next();
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({
            success: false,
            message: 'Database connection failed',
            error: error.message
        });
    }
};
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors({
    origin: [
        "http://localhost:4200",
        process.env.FRONTEND_URL || "https://emart-backend-pi.vercel.app/api",
        /\.vercel\.app$/
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Serve uploads - handle both static (local) and API route (serverless)
const isServerless = process.env.NODE_ENV === 'production' || __dirname.includes('/var/task');
const fs = require('fs');

// Determine upload directory
const uploadDir = isServerless 
    ? path.join('/tmp', 'uploads')
    : path.join(__dirname, 'uploads');

// Handle uploads route for serverless (Vercel can't reliably serve static files from /tmp)
app.get('/uploads/:filename', (req, res) => {
    try {
        const filename = req.params.filename;
        const filePath = path.join(uploadDir, filename);
        
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                success: false,
                message: 'Image not found'
            });
        }
        
        // Determine content type based on file extension
        const ext = path.extname(filename).toLowerCase();
        const contentTypes = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.webp': 'image/webp'
        };
        
        const contentType = contentTypes[ext] || 'application/octet-stream';
        
        // Set appropriate headers
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
        
        // Send the file
        res.sendFile(filePath);
    } catch (error) {
        console.error('Error serving image:', error);
        res.status(500).json({
            success: false,
            message: 'Error serving image',
            error: error.message
        });
    }
});

// Also serve static files for local development (fallback)
if (!isServerless) {
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
}

const router = require('./routes/router')
// Apply DB connection middleware to all API routes
app.use('/api', ensureDBConnection, router)

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
