const location = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js');
const locationConfig = config[location];
const knex = require('knex');
const connection = knex(locationConfig);

module.exports = connection;
