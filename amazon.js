let {
    AmazonClient
} = require('shipit');

amazonClient = new AmazonClient();

orderID = '106-9151392-7203433';
orderingShipmentId = 'DmZd0KS8k';
amazonClient.requestData({orderID, orderingShipmentId}, (err, result) => {
    if (err) {
        console.log(err);
    }

    if (result) {
        console.log(result);
    }
});