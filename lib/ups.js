var Q = require('q');

let {
    UpsClient
} = require('shipit');

var ups = new UpsClient({
    licenseNumber: '1C999A999B999999',
    userId: 'shipit-user',
    password: 'shhh-secret',
});

var UpsTracker = {
    track: function (trackingNumber) {
        var qPromise = Q.defer();
        ups.requestData({ trackingNumber }, (err, result) => {
            if (err) {
                return qPromise.reject(err);
            }

            return qPromise.resolve(result);
        });

        return qPromise.promise;
    }
};

module.exports = UpsTracker;

