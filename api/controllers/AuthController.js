/**
 * AuthController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var passport = require('passport');
var _ = require('underscore');

module.exports = {

    'login': function(req, res) {
        res.locals.flash = _.clone(req.session.flash);
        console.log(res.locals.flash);
        res.view();
        req.session.flash = {};
    },
    'signup': function(req, res) {
        res.view();
    },
    'authenticate': function(req, res) {
        console.log('authenticating user');

        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                console.log(info);
                req.session.flash = {
                    'err': 'Login Failure'
                };
                res.redirect('/login');
                return;
            }

            req.logIn(user, function(err) {
                console.log(user);
                if (err) {
                    console.log(err);
                    req.session.flash = {
                        'err': 'Login Failure'
                    };
                    res.redirect('/login');
                    return;
                }

                res.redirect('/dashboard');
                req.session.flash = {};
                return;
            });
        })(req, res);
    },
    'runkeeper': function(req, res) {
        console.log('authenticating user with runkeeper');
        passport.authenticate('runkeeper')(req, res);
    },
    'runkeeperCallback': function(req, res) {
        console.log('authentication done redirecting appropriately');
        passport.authenticate('runkeeper', function(err, user, info) {
            if ((err) || (!user)) {
                console.log("Error authenticating : " + info);
                req.session.flash = {
                    'err': 'Login Failure'
                };
                res.redirect('/login');
                return;
            }

            req.logIn(user, function(err) {
                console.log("loging in user : " + user);
                if (err) {
                    console.log("Error while login :" + err);
                    req.session.flash = {
                        'err': 'Login Failure'
                    };
                    res.redirect('/login');
                    return;
                }

                res.redirect('/dashboard');
                req.session.flash = {};
                return;
            });
        })(req, res);
    },
    'logout': function(req, res) {
        req.logout();
        res.redirect('/');
    },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to AuthController)
     */
    _config: {}

};
