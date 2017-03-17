'use strict';
// Load modules
const Hoek = require('hoek');
var Vision = require('vision');
var custom_handler = require('../controller');
// Declare internals

const internals = {
    defaults: {
        environment: 'development'
    }
};

exports.register = function(server, options, next) {

    const settings = Hoek.applyToDefaults(internals.defaults, options);
    server.register(Vision, function(err) {
        server.views({
            engines: {
                html: require('handlebars')
            },
            path: __dirname + '/'
        });
    });

    server.route({
        method: 'GET',
        path: '/entmon',
        config: {
            plugins: {
                env: options.environment
            }
        },
        handler: custom_handler // display Ent Mon page form
    });
    return next();
}

exports.register.attributes = {
    pkg: require('../package.json')

};