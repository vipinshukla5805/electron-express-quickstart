var bodyParser = require("body-parser");
var express = require("express");
var createServer = require("http").createServer;

exports.init = init;

var config = require("./config");

function init() {
  var app = express();

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  app.get("/ok", function(req, res) {
      res.send('Express Running');
    res.status(200).end();
  });

  // app.all("/v2/:action", mw());

  app.use(express.static("public"));

  var server = createServer();
  server.on("request", app);

  server.listen(config.port, function() {
    console.warn("Listen: " + config.port);
  });
}