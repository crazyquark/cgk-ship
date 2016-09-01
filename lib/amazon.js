let {
    AmazonClient
} = require('shipit');

var amazonClient = new AmazonClient();

// orderID = '106-9151392-7203433';
// orderingShipmentId = 'DmZd0KS8k';

var AmazonTracker = {
    track: function (orderID) {
        var qPromise = Q.defer();
        amazonClient.requestData({ orderID }, (err, result) => {
            if (err) {
                return qPromise.reject(err);
            }

            return qPromise.resolve(result);
        });

        return qPromise.promise;
    }
}

module.exports = AmazonTracker;