/**
 * Local Authentication Protocol
 *
 * The most widely used way for websites to authenticate users is via a username
 * and/or email as well as a password. This module provides functions both for
 * registering entirely new users, assigning passwords to already registered
 * users and validating login requesting.
 *
 * For more information on local authentication in Passport.js, check out:
 * http://passportjs.org/guide/username-password/
 */

var validator = require('validator');

/**
 * Register a new user
 *
 * This method creates a new user from a specified email, username and password
 * and assign the newly created user a local Passport.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.register = function(req, res, next) {
    var email = req.param('email');
    var username = req.param('username');
    var password = req.param('password');

    if (!email) {
        req.session.flash = {'err' : 'Email.Missing'};
        return next(new Error('No email was entered.'));
    }

    if (!username) {
        req.session.flash = {'err' : 'Username.Missing'};
        return next(new Error('No username was entered.'));
    }

    if (!password) {
        req.session.flash = {'err' : 'Password.Missing'};
        return next(new Error('No password was entered.'));
    }

    User.create({
        username: username,
        email: email
    }).done(function(err, user) {
        if (err) {
            req.session.flash = {'err' : 'User.Exists'};
            return next(err);
        }

        Permit.create({
            protocol: 'local',
            password: password,
            user: user.id
        }).done(function(err, permit) {
            next(err, user);
        });
    });
};

/**
 * Assign local Passport to user
 *
 * This function can be used to assign a local Passport to a user who doens't
 * have one already. This would be the case if the user registered using a
 * third-party service and therefore never set a password.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.connect = function(req, res, next) {
    var user = req.user;
    var password = req.param('password');

    Permit.findOne({
        protocol: 'local',
        user: user.id
    }).done(function(err, permit) {
        if (err) return next(err);

        if (!permit) {
            Permit.create({
                protocol: 'local',
                password: password,
                user: user.id
            }).done(function(err, permit) {
                next(err, user);
            });
        } else {
            next(null, user);
        }
    });
};

/**
 * Validate a login request
 *
 * Looks up a user using the supplied identifier (email or username) and then
 * attempts to find a local Passport associated with the user. If a Passport is
 * found, its password is checked against the password supplied in the form.
 *
 * @param {Object}   req
 * @param {string}   identifier
 * @param {string}   password
 * @param {Function} next
 */
exports.login = function(req, identifier, password, next) {
    var isEmail = validator.isEmail(identifier);
    var query = {};

    if (isEmail) {
        query.email = identifier;
    } else {
        query.username = identifier;
    }

    User.findOne(query).done(function(err, user) {
        if (err) return next(err);

        if (!user) {
            if (isEmail) {
                req.session.flash = {'err' : 'Email.NotFound'};
            } else {
                req.session.flash = {'err' : 'Username.NotFound'};
            }

            return next(null, false);
        }

        Permit.findOne().where({
            protocol: 'local',
            user: user.id
        }).done(function(err, permit) {
            if (permit) {
                permit.validatePassword(password, function(err, res) {
                    if (err) return next(err);

                    if (!res) {
                        req.session.flash = {'err' : 'Password.Wrong'};
                        return next(null, false);
                    } else {
                        return next(null, user);
                    }
                });
            } else {
                req.session.flash = {'err' : 'Password.NotSet'};
                return next(null, false);
            }
        });
    });
};
