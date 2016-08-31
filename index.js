let {
  UpsClient,
  FedexClient,
  UspsClient,
  DhlClient,
  LasershipClient,
  OnTracClient,
  UpsMiClient,
  DhlGmClient,
  CanadaPostClient,
  AmazonClient,
  PrestigeClient
} = require('shipit');

var ups = new UpsClient({
    licenseNumber: '1C999A999B999999',
    userId: 'shipit-user',
    password: 'shhh-secret',
});

fedex = new FedexClient({
  key: 'xyxyxyxyabababab',
  password: 'asdfawasfdasdfasdf1',
  account: '123456789',
  meter: '99999999',
});

usps = new UspsClient({
  userId: '590XABCR3210',
  clientIp: '10.5.5.1',
});

lsClient = new LasershipClient();

dhlClient = new DhlClient({
  userId: 'SHIPI_79999',
  password: 'shipit',
});

dhlgmClient = new DhlGmClient();

canadaPostClient: new CanadaPostClient({
  username: 'maple-leafs',
  password: 'zamboni',
});

onTrac = new OnTracClient();

upsmi = new UpsMiClient();

amazonClient = new AmazonClient();

prestige = new PrestigeClient();

