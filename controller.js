var configjson = require('./configuration.json');

function register_handler(request, reply, source, error) {
    var env = request.route.realm.pluginOptions;
    return reply.view('index', {
      body  : configjson.config[env.environment]
    })
}

module.exports = register_handler;