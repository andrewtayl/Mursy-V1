const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'unlockticket',
  aliases: ['unlock'],
  description: 'Start A Ticket',
 async execute(client, message, cmd, args, Discord){
let admin = message.member.permissions.has('ADMINISTRATOR');
let channel =message.channel.permissionOverwrites;
const member = message.mentions.users.first();
let name = message.channel.name.slice(7);
if(admin){
  channel.create(name,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
  });

  message.channel.send(`Ticket Is Now Unlocked 🔓`)
} else {
  message.channel.send(`Sorry **${message.author.username}**, Only Administrator's can unlock a Ticket`)
}

 }
}
