const express = require('express');
const router = express.Router();
const hotels = require('../controllers/hotels');

module.exports = (dal) => {
    const controller = hotels(dal);

    router.get('/search', controller.search);

    router.use(function(err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.send({message: 'Something Went Wrong!'});
    });

    return router;
};
