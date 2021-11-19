const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const mongoose = require("mongoose");
const client = new Discord.Client(
    {
        shards: 'auto',
        intents: ['GUILD_VOICE_STATES', 'GUILDS', 'GUILD_MESSAGES'],
        partials: ["MESSAGE", "CHANNEL", "REACTION"]
    }
);

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Files/Commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../Commands/${file}`);
    client.commands.set(command.name, command);
}

client.events = new Discord.Collection();
const eventsDir = fs.readdirSync('./Files/Events');
const reg = new RegExp('.js', 'g');
for (const folder of eventsDir) {
    if (folder.endsWith('.js')) {
        const event = require(`../Events/${folder}`);
        event.path = `../Events/${folder}`;
        client.events.set(folder.replace(reg, ''), event);
    } else {
        const key = folder.replace(/Events/g, '');
        const eventFiles = fs.readdirSync(`./Files/Events/${folder}`);
        for (const file of eventFiles) {
            if (file.endsWith('.js') && file.startsWith(key)) {
                const event = require(`../Events/${folder}/${file}`);
                event.path = `../Events/${folder}/${file}`;
                client.events.set(file.replace(reg, ''), event);
            } else {
                if (file.startsWith(key) && !file.endsWith('.js')) {
                    for (const eventFolderFile of fs.readdirSync(`./Files/Events/${folder}/${file}`)) {
                        if (`${eventFolderFile}`.endsWith('.js') && `${eventFolderFile}`.startsWith(key)) {
                            const event = require(`../Events/${folder}/${file}/${eventFolderFile}`);
                            event.path = `../Events/${folder}/${file}/${eventFolderFile}`;
                            client.events.set(eventFolderFile.replace(reg, ''), event);
                        }
                    }
                }
            }
        }
    }
}

client.prefix = process.env.PREFIX;

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connected to Database!`);
});


setInterval(function () {
    client.user.setActivity(`${client.guilds.cache.size} Servers | Prefix ${client.prefix} `, ({ type: "LISTENING" }));
}, 120000);

client.login(process.env.DISCORD_TOKEN);

module.exports = client;
