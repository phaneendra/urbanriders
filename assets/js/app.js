/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */


(function(io) {

    // as soon as this file is loaded, connect automatically,
    var socket = io.connect();
    if (typeof console !== 'undefined') {
        log('Connecting to Sails.js...');
    }

    socket.on('connect', function socketConnected() {

        // Listen for Comet messages from Sails
        socket.on('message', function messageReceived(message) {

            ///////////////////////////////////////////////////////////
            // Replace the following with your own custom logic
            // to run when a new message arrives from the Sails.js
            // server.
            ///////////////////////////////////////////////////////////
            log('New comet message received :: ', message);
            //////////////////////////////////////////////////////

        });


        ///////////////////////////////////////////////////////////
        // Here's where you'll want to add any custom logic for
        // when the browser establishes its socket connection to
        // the Sails.js server.
        ///////////////////////////////////////////////////////////
        log(
            'Socket is now connected and globally accessible as `socket`.\n' +
            'e.g. to send a GET request to Sails, try \n' +
            '`socket.get("/", function (response) ' +
            '{ console.log(response); })`'
        );
        ///////////////////////////////////////////////////////////


    });


    // Expose connected `socket` instance globally so that it's easy
    // to experiment with from the browser console while prototyping.
    window.socket = socket;


    // Simple log function to keep the example simple

    function log() {
        if (typeof console !== 'undefined') {
            console.log.apply(console, arguments);
        }
    }


})(

    // In case you're wrapping socket.io to prevent pollution of the global namespace,
    // you can replace `window.io` with your own `io` here:
    window.io

);

/**
Sign up new users.
*/
$("#signupButton").click(function() {
    console.log("signing up");
    var name = $("#signup-name").val();
    var email = $("#signup-email").val();
    var password = $("#signup-pass").val();
    var confirmPassword = $("#signup-repeatepass").val();
    if (email && password) {
        if (password === confirmPassword) {
            $.post(
                '/auth/local/register', {
                    name: name,
                    email: email,
                    password: password
                },
                function() {
                    window.location = "/login";
                }
            ).fail(function(res) {
                console.log("Server error");
                $('.alert').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Error!</strong> ' + res);
                $('.alert').removeClass('hide');
                $('.alert').show();
            });
        } else {
            console.log("Passwords don't match");
            $('.alert').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Error!</strong> Passwords don\'t match.');
            $('.alert').removeClass('hide');
            $('.alert').show();
        }
    } else {
        console.log("An email and password is required");
        $('.alert').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Error!</strong> An email and password is required');
        $('.alert').removeClass('hide');
        $('.alert').show();
    }
});


/**
Login new users.
*/
$("#loginButton").click(function() {
    console.log("Loging in");
    var email = $("input#email").val();
    var password = $("input#password").val();
    if (email && password) {
        console.log("submiting data");
        $('form#loginform').submit();
    } else {
        console.log("An email and password is required");
        $('.alert').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Error!</strong> An email and password is required');
        $('.alert').removeClass('hide');
        $('.alert').show();
    }
});
