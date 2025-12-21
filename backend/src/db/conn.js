const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Cache the connection promise to reuse in serverless
let cachedConnection = null;

const connectDB = async () => {
    // If already connected, return
    if (mongoose.connection.readyState === 1) {
        console.log('✅ Using existing database connection');
        return mongoose.connection;
    }

    // If connection is in progress, return the promise
    if (cachedConnection) {
        console.log('⏳ Waiting for existing connection...');
        return cachedConnection;
    }

    const dbUri = process.env.DB_URI;

    if (!dbUri) {
        console.error('ERROR: DB_URI environment variable is not set!');
        throw new Error('DB_URI is not configured');
    }

    const isDevelopment = process.env.NODE_ENV !== 'production';
    const dbName = isDevelopment ? 'dashboard (local)' : 'MongoDB Atlas';

    console.log(`Connecting to ${dbName}...`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);

    // Create connection promise with optimized settings
    cachedConnection = mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5s
        socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        maxPoolSize: 10, // Maintain up to 10 socket connections
        minPoolSize: 1, // Maintain at least 1 socket connection
        connectTimeoutMS: 10000, // Give up initial connection after 10s
    })
        .then(() => {
            console.log(`✅ Database connected successfully to ${dbName}`);
            return mongoose.connection;
        })
        .catch((error) => {
            console.error('❌ Database connection failed:', error.message);
            cachedConnection = null; // Reset on error so it can retry
            if (isDevelopment) {
                console.error('Make sure MongoDB is running locally on port 27017');
            } else {
                console.error('Check your MongoDB Atlas connection string and network access settings');
            }
            throw error;
        });

    return cachedConnection;
};

// Auto-connect on module load (for non-serverless)
if (process.env.VERCEL !== '1' && process.env.NODE_ENV !== 'production') {
    connectDB().catch((error) => {
        console.error('Failed to connect on startup:', error);
        process.exit(1);
    });
}

module.exports = connectDB;