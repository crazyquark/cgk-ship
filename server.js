require('./config/env.js');

var express = require('express');
var debug = require('debug')('server');

var Guess = require('./lib/guess.js');

var app = express();

let port = 3000;

app.use(express.static(__dirname + '/public'));


app.get('/api/guess', (req, res) => {
  let trackingID = req.query.trackingID;

  res.send({
    carriers: Guess.guessCarriers(trackingID)
  });
});

app.get('/api/track', (req, res) => {
  var carrier = req.query.carrier;
  let trackingID = req.query.trackingID;

  if (!trackingID) {
    return res.send({
      error: 'Please provide a tracking ID'
    })
  }

  // Try to guess carrier
  if (!carrier) {
    let carriers = Guess.guessCarriers(trackingID);

    if (carriers.length > 0) {
      carrier = carriers[0];
    } else {
      return res.send({
        error: 'Cannot guess carrier'
      });
    }

    debug('Guessed carrier: %s', carrier);
  }

  debug('Carrier: %s', carrier);
  debug('Tracking ID: %s', trackingID);

  try {
    let carrierClient = require('./lib/' + carrier + '.js');

    if (carrierClient) {
      carrierClient.track(trackingID).then((result) => {
        res.send(result)
      }, (err) => {
        res.send(err);
      });
    }
  } catch (err) {
    res.send({
      error: err
    });
  }

});

app.get('/*', (req, res) => {
  res.sendfile('./public/index.html');
});

app.listen(port, function () {
  debug('App started on port %s', port);
});
