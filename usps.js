let {
    UspsClient
} = require('shipit');

var usps = new UspsClient({
    userId: '825MKX002202',
    //   clientIp: '127.0.0.1',
});

let trackingNumber = 'CJ472875279US';
var request = usps.requestData({ trackingNumber }, (err, result) => {
    if (err) {
        console.log(err);
    }

    if (result) {
        console.log(result);
    }
});