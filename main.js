const client = require('./Files/Client/DiscordClient.js');

// eslint-disable-next-line no-undef
process.setMaxListeners(2);

for (const rawevent of [...client.events.entries()]) {
  const event = client.events.get(rawevent[0]);
  if (event.once) client.once(rawevent[0], (...args) => event.execute(...args));
  else client.on(rawevent[0], (...args) => event.execute(...args));
}

// eslint-disable-next-line no-undef
process.on('unhandledRejection', (error) => { console.log('Unhandled Rejection', error); });
// eslint-disable-next-line no-undef
process.on('uncaughtException', (error) => { console.log('Unhandled Exception', error); });