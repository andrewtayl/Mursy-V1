const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'ticket',
  description: 'Start A Ticket',
 async execute(client, message, cmd, args, Discord){


message.channel.bulkDelete(1);

const channel = await message.guild.channels.create(`ticket-${message.author.id}`);
channel.permissionOverwrites.create(message.guild.id,{
  SEND_MESSAGES: false,
  VIEW_CHANNEL: false
});

channel.permissionOverwrites.create(message.author, {
  SEND_MESSAGES: true,
  VIEW_CHANNEL: true
});

let ticketEmbed = new MessageEmbed()
.setColor("BLACK")
.setThumbnail(`${message.author.displayAvatarURL()}`)
.setDescription(`${message.author.username} Has Created a Ticket`)
.addField("To Close Ticket Do", "`.close`")
.addField("To Lock Ticket Do", "`.lock`")
.addField("To Unlock Ticket Do", "`.unlock`" )

const reactionMessage = await channel.send({ embeds: [ticketEmbed] })


message.channel.send(`We Will be Right With You! ${channel}`).then((message) => {
  setTimeout(function(){
      message.channel.bulkDelete(1)
   }, 7000);
})
 }
}
