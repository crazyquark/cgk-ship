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

app.get('/track', (req, res) => {
  var carrier = req.query.carrier;
  let trackingID = req.query.trackingID;

  if (!trackingID) {
    return res.send({
      error: 'Please provide a tracking ID'
    })
  }

  // Try to guess carrier
  if(!carrier) {
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

  let carrierClient = require('./lib/' + carrier + '.js');

  if (carrierClient) {
    carrierClient.track(trackingID).then((result) => {
      res.send(result)
    }, (err) => {
      res.send(err);
    }); 
  }
});

app.listen(port, function () {
  debug('App started on port %s', port);
});
