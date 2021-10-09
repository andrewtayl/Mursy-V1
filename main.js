const Discord = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
const fs = require('fs');
const { token } = require('./config.json');
const client = new Discord.Client({ intents: ['GUILD_VOICE_STATES', 'GUILDS', 'GUILD_MESSAGES'], partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '.';

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})


//Bot Token
client.login(token)
