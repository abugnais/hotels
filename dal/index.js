const hotels = require('./hotels');

module.exports = function (config) {
    return {
        hotels: hotels(config)
    }
};