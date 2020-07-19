process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const dotenv = require('dotenv');

dotenv.config();

exports.config = {
    PORT: parseInt(process.env.PORT) || 4000,
    DB: {
        URL: process.env.DB_URL
    },
    API_PREFIX: process.env.API_PREFIX || 'api',
    HOST: process.env.HOST
}