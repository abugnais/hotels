module.exports = function (dal) {
    return {

        search: async function (req, res, next) {
            try {
                let hotels = await dal.hotels.search(req.query);

                res.send(hotels);
            } catch(err) {
                next(err);
            }
        }
    }
};