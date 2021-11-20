require('dotenv').config();
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

// Setting up message handler and some command handling 
module.exports = {
    execute(message) {
        const client = message.client;
        this.commandHandler(message, client);
        this.messageHandler(message, client);
    },
    commandHandler(message, client) {
        // Prefix
        const prefix = client.prefix;
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        // Parsing messages to find commands and making lower case
        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();
        // Finding command
        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))

        if (command) {
            try {
                // Running command
                command.execute(client, message, cmd, args, Discord);
            } catch(err) {
                // Loging to consele any errors 
                console.log(`Error while running Command ${command.name}:`, err)
            }
        }
    },
    // Andrew again I don't really know what this is doing | leaveing as placeholder 
    messageHandler(message, client) {
        if (message.embeds) {
            const embed = message.embeds[0];
            if (message.author.id === '302050872383242240') {
                  if(embed.image){
                message.react('✅')
                setTimeout(function(){
                        const reminderEmbed = new MessageEmbed()
                        .setColor('BLACK')
                        .setTitle(`Bump Reminder :tada:`)
                        .setDescription("Your Server Is Ready To Be **Bumped** again!! `!d bump`")
                    message.reply({ embeds: [reminderEmbed] });
                }, 7200000);
            }
        }
    }
}
}
