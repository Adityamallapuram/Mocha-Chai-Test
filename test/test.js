var chai = require('chai'),
 chaiHttp = require('chai-http');
var expect = require('chai').expect;
 baseurl = 'https://dev-api.divrt.co';

 chai.use(chaiHttp);
describe('User', function() {
 it('should give user details', function(done) {
chai.request(baseurl)
  .post('/api/v3/checkpaytmuser')
  .set('Accept', 'application/json')
  .send({
			"access_token":"1d9aafc2-09d2-41f4-80e1-2e5492d9760b","resourceOwnerId":"19189","expires":"1486622956538","imei":"351615081456568","refcode":"", "ltype":"paytm"

		})
  .then(function (res) {
     expect(res).to.have.status(200);
  })
  .catch(function (err) {
     throw err;
  });
  /*.end(function (err, res) {
     //expect(err).to.be.null;
     expect(res).to.have.status(200);
     done();
  });*/
  done();
});

 it('Checks balance', function(done) {
chai.request(baseurl)
  .post('/api/v3/payment/checkBalance')
  .set('Accept', 'application/json')
  .send({
	"uid":1,
	"divrt":"c7806fbe9cd2b003d742bbb63559979f9077dfac408c043027a657e8b6db2a3b"
})
  .then(function (res) {
     expect(res).to.have.status(200);
  })
  .catch(function (err) {
     throw err;
  });
  /*.end(function (err, res) {
     //expect(err).to.be.null;
     expect(res).to.have.status(200);
     done();       
  });*/
  done();
});

it('get Bookings History By UserId', function(done) {
chai.request(baseurl)
  .post('/api/v3/booking/getBookingsHistoryByUserId')
  .set('Accept', 'application/json')
  .send({
	"uid":1,
	"currenttime":1479294188,
	"divrt":"c7806fbe9cd2b003d742bbb63559979f9077dfac408c043027a657e8b6db2a3b"
})
  .then(function (res) {
     expect(res).to.have.status(200);
  })
  .catch(function (err) {
     throw err;
  });
  done();
});
});