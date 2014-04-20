/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

    'use strict';
    // User is allowed, proceed to the next policy,
    // or if this is the last policy, the controller
    // Sockets
    if (req.isSocket) {
        console.log(req.session.passport.user);
        if (req.session &&
            req.session.passport &&
            req.session.passport.user) {
            return next();
        }

        res.json(401);
    }
    // HTTP
    else {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()) {
            return next();
        }

        // If you are using a traditional, server-generated UI then uncomment out this code:
        res.redirect('/login');

        // If you are using a single-page client-side architecture and will login via socket or Ajax, then uncomment out this code:
        /*
        res.status(401);
        res.end();
        */
    }
};
