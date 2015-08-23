'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var server = new _hapi2['default'].Server();

server.connection({ port: 3000 });
server.register(_inert2['default'], function () {});

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