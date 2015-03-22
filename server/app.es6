'use strict';

import Hapi from 'hapi';

let server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'build/client/',
      index: true
    }
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
