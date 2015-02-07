
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'client/build/',
      index: true
    }
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
