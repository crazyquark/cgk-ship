require('./config/env.js');

var express = require('express');
var debug = require('debug')('server');

var Guess = require('./lib/guess.js');

var app = express();

let port = 3000;

app.get('/guessCarriers', (req, res) => {
  let trackingID = req.query.trackingID;

  res.send({
    carriers: Guess.guessCarriers(trackingID)
  });
});

app.get('/track' , (req, res) => {
  let carrier = req.query.carrier;
  let trackingID = req.query.trackingID;

  res.send({
    info: 'N/A'
  });
});

app.listen(port, function () {
  debug('App started on port %s', port);
});
