var app = 'https://dev-api.divrt.co';
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('Api Tests', function() {

    /*it('should return the user if the name is valid', function(done) {
      request(app)
      .post('/api/v3/payment/checkPaytmUser')
      .send({
	  access_token: "1d9aafc2-09d2-41f4-80e1-2e5492d9760b",
			resourceOwnerId: "19189",
			expires: "1486622956538",
			imei: "351615081456568",
			refcode: "", 
			ltype: "paytm"
	  })
      .end(function(err, res){
        //expect(res.body.status).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });*/

    it('should return the user paytm balance', function(done) {
    	this.timeout(5000);
      request(app)
      .post('/api/v3/payment/checkBalance')
      .send({
	uid:1,
	divrt:"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
        })
      .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

    it('should find the user', function(done) {
    request(app)
  .post('/api/v3/user/find/me')
  .set('Accept', 'application/json')
  .send({
	"me": "tapan@divrt.co",
	"divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        done();
    });

});

it('should add booking', function(done) {
request(app)
  .post('/api/v3/booking/add')
  .set('Accept', 'application/json')
  .send({
		"uid":1,
	    "zid":3,
	    "start":1482487188,
	    "duration":580,
	    "price":10, 
	    "state": 6,
	    "timezone":"Asia/Calcutta",
	    "timezonedstoffset":"0",
	    "timezoneoffset":"19800",
	    "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should get the slots available in Zid', function(done) {
request(app)
  .post('/api/v3/booking/availableSlotsInZid')
  .set('Accept', 'application/json')
  .send({
	"zid":3,
	"divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should get Bookings History By Zone Id', function(done) {
request(app)
  .post('/api/v3/booking/getBookingsHistoryByZoneId')
  .set('Accept', 'application/json')
  .send({
	"zid":1,
	"start":1474298610,
	"end":1476804209,
	"divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should get Bookings History By User Id', function(done) {
request(app)
  .post('/api/v3/booking/getBookingsHistoryByUserId')
  .set('Accept', 'application/json')
  .send({
	"uid":1,
	"currenttime":1479294188,
	"divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should add zone', function(done) {
request(app)
  .post('/api/v3/zone/add')
  .set('Accept', 'application/json')
  .send({ "lla":"-33.8484284",
	"llo":"151.06821119999995",
	"tn": "1232934343",
	"me": "axroh@yahoo.com",
	"start":"1476084600",
	"n": "Australia Zone",
	"timezone": "Australia/Sydney",
	"timezoneoffset":36000,
	"timezonedstoffset": 3600,
	"price4": {"minduration":"1","mindurationprice":"10","priceperhrs":"10"},
	"max4": 20,
	"max2": 0,
	"currency": "$",
	"price2": {"minduration":"1","mindurationprice":"10","priceperhrs":"10"},
	"it": {"facilities":["airport"],"workingdays":["0"],"workinghours":"7:00 PM-9:30 PM","workinghoursmin":"1140-1290","leveldata":"0/1/10/0","nooflevels":"1","tnc":"test AR","terms":"on","currency":"$","geofencing":"1","ammenities":[{"name":["airport"],"link":"images/airport.png"}]},
	"aid":"114","as1":"8 Herb Elliott Ave, Sydney Olympic Park NSW 2127, Australia","as2":"","aco":"Australia","aci":"Sydney Olympic Park","az":"2127","ast":"New South Wales",
	"divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb",
	"pid": 80,
	"zonelevel": [{"level":"1", "slots": 20, "sensor": 0, "levelname": "TOP" }]
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should get the zone details using latlng', function(done) {
request(app)
  .post('/api/v3/zone/latlng')
  .set('Accept', 'application/json')
  .send({
	"lla":"12.9081357",
	"llo":"77.64760799999999",
	"start":"1476084600"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should get bookings history by userId', function(done) {
request(app)
  .post('/api/v3/booking/getBookingsHistoryByUserId')
  .set('Accept', 'application/json')
  .send({
	"uid":1,
	"currenttime":1479294188,
	"divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should update defaulter money', function(done) {
request(app)
  .post('/api/v3/payment/updateDefaulterMoney')
  .set('Accept', 'application/json')
  .send({
	"order_id": "Vc6ZRluOIv",
	"divrt": "db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb",
	"currency":"RS",
	"vendor":"paytm",
	"amount":300,
	"uid":1
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should add payment', function(done) {
request(app)
  .post('/api/v3/payment/add')
  .set('Accept', 'application/json')
  .send({"uid":1,
  "zid":1,
 "order_id":"hlWU0GqSHR",
 "transaction_id":"148135972PQ12",
 "vendor":"PAYTM",
 "amount":0,
 "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should give the information about promotion', function(done) {
request(app)
  .post('/api/v3/promotion')
  .set('Accept', 'application/json')
  .send({"lla":44.3221,
"llo":55.4333})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should add attender', function(done) {
request(app)
  .post('/api/v3/attender/add')
  .set('Accept', 'application/json')
  .send({
  "me":"att1@divrt.co",
  "tn":"+919030007974",
  "pwp":"test",
  "ltype": "ATT",
  "zid":2,
  "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should not login', function(done) {
request(app)
  .post('/api/v3/attender/login')
  .set('Accept', 'application/json')
  .send({
  "me":"att1@divrt.co",
  "pwp":"test",
  "ltype":"ATT"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should checkin vehicle', function(done) {
request(app)
  .post('/api/v3/attender/checkin')
  .set('Accept', 'application/json')
  .send({
  "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb",
  "uid":1,
  "bid":"A32vAsx4on"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should checkout the vehicle', function(done) {
request(app)
  .post('/api/v3/attender/checkout')
  .set('Accept', 'application/json')
  .send({
  "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb",
  "uid":1,
  "bid":"BmtLoO3ljO",
  "zid":1
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should get the list of vehivles to checkout', function(done) {
request(app)
  .post('/api/v3/attender/vehiclestocheckout')
  .set('Accept', 'application/json')
  .send({
  "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb",
  "uid":1,
  "zid":1
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should find the zone by Id', function(done) {
request(app)
  .post('/api/v3/attender/findByZid')
  .set('Accept', 'application/json')
  .send({
  "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb",
  "zid":2
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should get the collections', function(done) {
request(app)
  .post('/api/v3/attender/collections')
  .set('Accept', 'application/json')
  .send({
  "divrt":"db610fc3324fa015b46cbfde8fcfad9a09f15ee667f904319d10046458e053cb",
  "attid":1,
  "from":1479120416,
  "to":1479193101
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
  });

});

