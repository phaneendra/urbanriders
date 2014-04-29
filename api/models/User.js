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
        username: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        uid: {
            type: 'string',
            unique: true
        },
        permits: {
            collection: 'Permit',
            via: 'user'
        }
    },
    getAll: function() {
        return User.find()
            .then(function(models) {
                return [models];
            });
    },

    getOne: function(id) {
        return User.findOne(id)
            .then(function(model) {
                return [model];
            });
    }
};
