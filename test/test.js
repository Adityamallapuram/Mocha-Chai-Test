var app = 'https://test-api.divrt.co';
var chai = require('chai');
var request = require('supertest');
//var describe =require('mocha');
//var expect = ('supertest').expect;
var expect = chai.expect;
var date = new Date();
//var delayMillis = 100000; // 5 min

describe('Test scenario', function() {

    it('should Login, add zone, find zone, check Balance, add booking, add payment, get Bookings History By UserId, Checkin, get vehicles list', function(done) {
      this.timeout(1000000);

      request(app)
      .post('/api/v3/payment/checkPaytmUser')
      .send({
      "access_user_token": "3a2ebb39-a1f8-4997-a462-6f7aa90e5c54",
      "resourceOwnerId": "331045647",
      "expires": "1490590638883",
      "imei": "351615081456568",
      "refcode": "", 
      "ltype": "paytm"
    })
      .end(function(err, res, body){
        expect(res.statusCode).to.be.equal(200);
        expect({ status: 'true' }).to.deep.equal({ status: 'true' });

        var user_token = res.body.message.divrt;
        var userId = res.body.message.user.uid;

      request(app)
      .post('/api/v3/zone/add')
      .set('Accept', 'application/json')
      .send({ "lla":"12.9099088",
  "llo":"77.64798589999998",
  "tn": "1232934340",
  "me": "addy@yahoo.com",
  "start":Math.floor(date.getTime()/1000),
  "n": "Divrt office Zone",
  "timezone": "Asia/Calcutta",
  "timezoneoffset":19800,
  "timezonedstoffset": 0,
  "price4": {"minduration":"1","mindurationprice":"10","priceperhrs":"10"},
  "max4": 100,
  "max2": 10,
  "currency": "RS",
  "price2": {"minduration":"1","mindurationprice":"10","priceperhrs":"10"},
  "it": {"facilities":["airport"],"workingdays":["0"],"workinghours":"7:00 PM-9:30 PM","workinghoursmin":"1140-1290","leveldata":"0/1/10/0","nooflevels":"1","tnc":"test AR","terms":"on","currency":"$","geofencing":"1","ammenities":[{"name":["airport"],"link":"images/airport.png"}]},
  "aid":"114","as1":"HSR layout, Australia","as2":"","aco":"India","aci":"Banglore ","az":"560001","ast":"Karnataka",
  "divrt": user_token,
  "pid": 80,
  "zonelevel": [{"level":"1", "slots": 100, "sensor": 0, "levelname": "TOP" }]
})
      .end(function(err, res){
        
        expect(res.statusCode).to.be.equal(200);
        expect({ status: 'true' }).to.deep.equal({ status: 'true' });   
        var zoneId = res.body.zones.zid;    

       request(app)
  .post('/api/v3/zone/latlng')
  .set('Accept', 'application/json')
  .send({
  "lla":"12.9099088",
  "llo":"77.64798589999998",
  "start": Math.floor(date.getTime()/1000)
})
  .end(function(err, res){
    expect(res.statusCode).to.be.equal(200);
        expect({ status: 'true' }).to.deep.equal({ status: 'true' });
        
      request(app)
      .post('/api/v3/payment/checkBalance')
      .send({
  "uid":userId,
  "divrt":user_token
        })
      .end(function(err, res){
        expect(res.statusCode).to.be.equal(200);
        expect({ status: 'true' }).to.deep.equal({ status: 'true' });
        expect(res.body.message).to.have.property('STATUS', 'ACTIVE');
        expect(res.body.message.WALLETBALANCE).to.be.at.least(20);

        request(app)
    .post('/api/v3/booking/add')
    .set('Accept', 'application/json')
     .send({
    "uid":userId,
      "zid":zoneId,
      "start": Math.floor(date.getTime()/1000),
      "duration":60,
      "price":10, 
      "state": 6,
      "timezone":"Asia/Calcutta",
      "timezonedstoffset":"0",
      "timezoneoffset":"19800",
      "divrt":user_token
  })
  .end(function(err, res){
    expect(res.statusCode).to.be.equal(200);
    expect({ status: 'true' }).to.deep.equal({ status: 'true' });
    //console.log(res);

    var bookingId = res.body.booking.booking_id;

  request(app)
  .post('/api/v3/payment/add')
  .set('Accept', 'application/json')
  .send({"uid":userId,
  "zid":zoneId,
  "order_id":bookingId,
  "transaction_id": Math.floor(Math.random()*1000000000),
  "vendor":"PAYTM",
  "amount":0,
  "divrt":user_token })
  .end(function(err, res){
    expect(res.statusCode).to.be.equal(200);
    expect({ status: 'true' }).to.deep.equal({ status: 'true' });
   // console.log(res);

    request(app)
  .post('/api/v3/booking/getBookingsHistoryByUserId')
  .set('Accept', 'application/json')
  .send({
  "uid":userId,
  "currenttime":Math.floor(date.getTime()/1000),
  "divrt": user_token
})
  .end(function(err, res){
    expect(res.statusCode).to.be.equal(200);
    expect({ status: 'true' }).to.deep.equal({ status: 'true' });

  request(app)
  .post('/api/v3/attender/checkin')
  .set('Accept', 'application/json')
  .send({
  "divrt":user_token,
  "uid":userId,
  "bid":bookingId
})
  .end(function(err, res){
    expect(res.statusCode).to.be.equal(200);
    expect({ status: 'true' }).to.deep.equal({ status: 'true' });

    request(app)
  .post('/api/v3/attender/vehiclestocheckout')
  .set('Accept', 'application/json')
  .send({
  "divrt": user_token,
  "uid":userId,
  "zid":zoneId
})
  .end(function(err, res){
    expect(res.statusCode).to.be.equal(200);
    expect({ status: 'true' }).to.deep.equal({ status: 'true' });

        //expect(res.body.booking).to.have.property('booking_id');
        //expect(res.body).to.have.property('booking');
        /*expect({
  "status": true,
  "booking": }).to.deep.equal({ status: 'true' });*/
        //expect('everything').to.be.ok; 
        //console.log(res);*/
        done(); 
      }); 

     });
    });
});
    
});
});
      });
});
    });
});
});

  /*request(app)
  .post('/api/v3/attender/checkout')
  .set('Accept', 'application/json')
  .send({
  "divrt":user_token,
  "uid":userId,
  "bid":bookingId,
  "zid":zoneId
})  
  .end(function(err, res){
    expect(res.statusCode).to.be.equal(200);
    expect(res.statusCode).to.be.equal(200);
    done();
  });

  */
