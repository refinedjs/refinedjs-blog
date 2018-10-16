(function() {
  "use strict";

  var path = require('path');
  var http = require('http');

  function setAppRoutes(app)
  {
    app.route('/').get(function response(req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  }

  module.exports = setAppRoutes;
}());