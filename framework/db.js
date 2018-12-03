require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config');

module.exports = function (app) {
  const dbEnv = process.env.DB_ENV || 'mongodb_local';
  const connectionString = config[dbEnv];
  mongoose.connect(connectionString, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};