/**
 * Created by romab on 29.02.2016.
 */
module.exports = function(req, res, next){
    var err;

    if(!req.session || !req.session.loggedIn){
        err = new Error('Forbidden');
        err.status = 403;

        return next(err);
    }

    next();
};