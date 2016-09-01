let { guessCarrier } = require('shipit');

let Guess = {
    guessCarriers: function(trackingID) {
        return guessCarrier(trackingID);
    }
};

module.exports = Guess;