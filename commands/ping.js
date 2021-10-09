const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'ping',
  description: "This is the ping command!",
  execute(client, message, cmd, args, Discord){
    const pingEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Pong!')
      .setDescription(`🏓 **${Date.now() - message.createdTimestamp}ms.**`)
    message.channel.send({ embeds: [pingEmbed] });


  }
}
