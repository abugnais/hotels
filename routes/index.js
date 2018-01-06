const express = require('express');
const router = express.Router();
const config = require("config");

module.exports = (dal) => {

    router.get('/', async (req, res, next) => {
        try {
            let hotels = await dal.hotels.search({});

            res.render('index', { title: config.get("api.url"), hotels: JSON.stringify(hotels) });
        } catch(err) {
            err.message = "Something went wrong";
            err.status = 500;

            next(err);
        }
    });

    return router;
};
