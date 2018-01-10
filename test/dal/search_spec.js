const nock = require('nock');
const should = require('should');
const config = require("config");
const dal = require('../../dal/')(config);
const querystring = require('querystring');
const fs = require('fs');
const url = config.get("api").url;
const default_params = config.get("api").default_params;

describe('dal.search', function () {
    it('should proxy the json response returned from the remote api', function () {
        let successResponse = JSON.parse(fs.readFileSync(__dirname + '/success_fixture.json', 'utf-8'));
        let params = {foo: "bar"};
        let qs = querystring.stringify(Object.assign(params, default_params));

        let fake = nock(url)
            .get('?foo=bar&scenario=deal-finder&page=foo&uid=foo&productType=Hotel')
            .reply(200, successResponse);

        let result = dal.hotels.search({foo: "bar"});

        return result.then(function (data) {
            should.equal(successResponse.offers.Hotel.length, data.offers.Hotel.length);
        });
    });
});