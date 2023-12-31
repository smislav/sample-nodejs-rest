module.exports = {
    development: {
        username: 'root',
        password: '',
        database: 'database_dev',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    staging: {
        username: 'root',
        password: '',
        database: 'database_stg',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql'
    }
};
