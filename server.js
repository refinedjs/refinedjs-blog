/**
* Module dependencies.
*/
const express = require('./framework/express');
//import express from './framework/express';
// Initialize server
function startServer() {
	// Initialize express
	var app = express.init();
	// Start up the server on the port specified in the config

  const port = process.env.PORT || 3000;

	app.listen(port, function() {
		console.log('App started on port ', port);
	});

	module.exports = app;
}

startServer();