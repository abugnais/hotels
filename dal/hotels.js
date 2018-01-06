const config = require("config");
const client = require("superagent");
const api_config = config.get("api");

const request = function (url, params) {
    return new Promise(function (resolve, reject) {
        client
            .get(api_config.url)
            .query(params)
            .set('Accept', 'application/json')
            .end(function (err, result) {
                if (err) {
                    return reject(err);
                }

                return resolve(JSON.parse(result.text));
            });
    });
};

const hotels = {
    search: async function (params) {
        let full_params = Object.assign(params, api_config.required_params);
        let response = await request(api_config.url, full_params);

        return response;
    }
};

module.exports = hotels;