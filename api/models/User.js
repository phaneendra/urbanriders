/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {

    attributes: {
        /* e.g.
        nickname: 'string'
        */
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        uid: {
            type: 'string',
            unique: true
        },
        password: {
            type: 'string'
        },
        token: {
            type: 'string'
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function(attrs, next) {
        if (attrs.password) {
            bcrypt.genSalt(10, function(err, salt) {
                if (err) return next(err);

                bcrypt.hash(attrs.password, salt, function(err, hash) {
                    if (err) return next(err);

                    attrs.password = hash;
                    next();
                });
            });
        }
        next();
    }
};
