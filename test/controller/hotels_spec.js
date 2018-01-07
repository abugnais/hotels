const should = require('should');
const sinon = require('sinon');
const request = require('supertest');
const app = require('express')();
const routes = require('../../routes');

const dal = {
    hotels: {
        search: null
    }
};

app.use('/', routes(dal));

describe('search controller', function (done) {

    beforeEach(function () {
        dal.hotels.search = sinon.stub();
    });

    it('should render all the offers returned from the backend', function () {

        let req = {
            "foo": "bar"
        };

        dal.hotels.search.returns([])

        request(app)
            .get('/search')
            .query(req)
            .end(function (err, res) {
                sinon.assert.calledOnce(dal.hotels.search);

                should.equal([], res);
                should.not.exist(err);

                done();
            })
            .expect(200, done);
    });

    it('should return an internal server error with a user friendly message if the backend failed', function (done) {
        let req = {
            "foo": "bar"
        };

        dal.hotels.search.throws('Error');

        request(app)
            .get('/search')
            .query(req)
            .expect(500)
            .end(function (err, res) {
                should.equal("Something Went Wrong!", res.body.message);
                done();
            });
    });
});