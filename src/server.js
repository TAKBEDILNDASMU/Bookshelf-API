const Hapi = require('@hapi/hapi');
const routes = require('./route/api');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: '127.0.0.1',
  });

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
