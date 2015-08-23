import Hapi from 'hapi';
import Inert from 'inert';

let server = new Hapi.Server();

server.connection({ port: 3000 });
server.register(Inert, function () {});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'dist/client/',
      index: true
    }
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
