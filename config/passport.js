var passport = require('passport');
var bcrypt = require('bcrypt');
var request = require('request');
var LocalStrategy = require('passport-local').Strategy;
var RunKeeperStrategy = require('passport-runkeeper').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOneById(id).done(function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        console.log(email + password);

        User.findOne({
            email: email
        }).done(function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user ' + email
                });
            }
            bcrypt.compare(password, user.password, function(err, isMatch) {
                if (err) return done(err);
                console.log('isMatch:' + isMatch);
                if (!isMatch) {
                    return done(null, false, {
                        message: 'Invalid password'
                    });
                } else {
                    return done(null, user);
                }
            });
        });
    }
));


passport.use(new RunKeeperStrategy({
        clientID: 'b0790295a9024fbc922779855f9df3ab',
        clientSecret: '5c84053f1cdc4e3e960200a19c40c2e1',
        callbackURL: "http://127.0.0.1:1337/auth/runkeeperCallback"
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({
            or: [{
                uid: parseInt(profile.id)
            }, {
                uid: profile.id
            }]
        }).done(function(err, user) {
            if (user) {
                console.log("Found User " + user);
                user.token = accessToken;
                user.save(function(err) {
                    // Error handling
                    if (err) {
                        console.log("Error Saving User " + JSON.stringify(err));
                        console.log(err);
                        return done(err);
                    } else {
                        // The User was saved successfully!
                        console.log("User saved:", user);
                        return done(null, user);
                    }
                });
            } else {
                var data = {
                    uid: profile.id,
                    token: accessToken,
                    name: ""
                };
                console.log("Sending request to runkeeper api to fetch profile : " + profile.id);
                request.get('http://api.runkeeper.com/profile', {
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Content-type': 'application/vnd.com.runkeeper.Profile+json'
                    }
                }, function(error, response, body) {
                    if (response.statusCode == 200) {
                        body = JSON.parse(body);
                        data.name = body.name;
                        console.log('Retrived Profile information');
                        User.create(data).done(function(err, user) {
                            // Error handling
                            if (err) {
                                console.log("Error Create User " + JSON.stringify(err));
                                console.log(err);
                                return done(err);
                            } else {
                                // The User was created successfully!
                                console.log("User created:", user);
                                return done(null, user);
                            }
                        });
                    } else {
                        console.log('error: ' + response.statusCode);
                        console.log(JSON.parse(body));
                    }
                });
            }
        });
    }
));
