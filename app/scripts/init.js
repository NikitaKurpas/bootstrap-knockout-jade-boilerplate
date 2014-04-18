/**
 Do your app initialization here
 */

'use strict';

$(function() {
    console.log('Initializing application...');

    $.sammy('body', function() {

        console.log('Initializing Sammy.JS routes');

        this.any('/', function() {
            console.log('Request: Root route. Redirect...');
            this.redirect('#/home');
        });

        this.get('#/home', function() {
            console.log('Request: Home route');
            $.get('/views/home.html', function(data) {
                $('#main-wrapper').html(data);
                console.log('Home route loaded!');
            });
        });

        this.get('#/about', function() {
            console.log('Request: About route');
            $.get('/views/about.html', function(data) {
                $('#main-wrapper').html(data);
                console.log('About route loaded!');
            });
        });


        /**
         * A stub for undefined routes - should always be at the end.
         * If you can fix the 'notFound()' function - use that instead!
         * Using of 'notFound()' is the right way, but for some reason 'redirect' wont work.
         */
        this.any(/.*/, function() {
            console.log('Request: Unknown route. Redirect...');
            this.redirect('/');
        });


        /**
         * If you can fix the 'redirect()' being undefined - use this function instead!
         */
        this.notFound = function() {
            console.log('Request: Unknown route. Redirect...');
            this.redirect('/');
        };

    }).run();
    
});