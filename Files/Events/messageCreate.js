require('dotenv').config();
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    execute(message) {
        const client = message.client;
        this.commandHandler(message, client);
        this.messageHandler(message, client);
    },
    commandHandler(message, client) {
        const prefix = client.prefix;
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))

        if (command) {
            try {
                command.execute(client, message, cmd, args, Discord);
            } catch(err) {
                console.log(`Error while running Command ${command.name}:`, err)
            }
        }
    },
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
