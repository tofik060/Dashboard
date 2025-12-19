const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbUri = process.env.DB_URI;

if (!dbUri) {
    console.error('ERROR: DB_URI environment variable is not set!');
    // Don't exit in serverless - let it log the error
    if (process.env.VERCEL !== '1') {
        process.exit(1);
    }
} else {
    const isDevelopment = process.env.NODE_ENV !== 'production';
    const dbName = isDevelopment ? 'dashboard (local)' : 'MongoDB Atlas';

    console.log(`Connecting to ${dbName}...`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);

    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log(`✅ Database connected successfully to ${dbName}`);
        })
        .catch((error) => {
            console.error('❌ Database connection failed:', error.message);
            if (isDevelopment) {
                console.error('Make sure MongoDB is running locally on port 27017');
            } else {
                console.error('Check your MongoDB Atlas connection string and network access settings');
            }
            // Don't exit in serverless - connection will retry on next request
            if (process.env.VERCEL !== '1') {
                process.exit(1);
            }
        });
}