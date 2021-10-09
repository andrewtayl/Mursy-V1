const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'invite',
  description: "Invites The Bot to your server",
  execute(client, message, cmd, args, Discord){
    let inviteEmbed = new MessageEmbed()
    .setColor("RED")
    .setDescription("[Click here](https://discord.com/oauth2/authorize?client_id=882458361663213599&scope=bot) to invite this bot to your server")
    message.channel.send({ embeds: [inviteEmbed] });
  }
}
