var express = require('express');
var app = express();

var Guess = require('./lib/guess.js');

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
