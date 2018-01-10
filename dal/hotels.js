const client = require("superagent");

const request = function (url, params) {
    return new Promise(function (resolve, reject) {
        client
            .get(url)
            .query(params)
            .end(function (err, result) {
                if (err) {
                    return reject(err);
                }

                return resolve(JSON.parse(result.text));
            });
    });
};

module.exports = function (config) {
    const api_config = config.get("api");

    return {
        search: async function (params) {
            let full_params = Object.assign(params, api_config.required_params);
            let response = await request(api_config.url, full_params);

            return response;
        }
    };
};