var Q = require('q');

let {
    UspsClient
} = require('shipit');


var usps = new UspsClient({
    userId: '825MKX002202',
    //   clientIp: '127.0.0.1',
});

var UspsTracker = {
    track: function (trackingNumber) {
        var qPromise = Q.defer();
        usps.requestData({ trackingNumber }, (err, result) => {
            if (err) {
                return qPromise.reject(err);
            }

            return qPromise.resolve(result);
        });

        return qPromise.promise;
    }
};

module.exports = UspsTracker;