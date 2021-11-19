const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports ={
  name: 'upvote',
  aliases: ['vote'],
   description: "generates memes",
  execute(client, message, cmd, args, Discord){
    let inviteEmbed = new MessageEmbed()
    .setColor("RED")
    .setDescription("[Click here](https://top.gg/bot/882458361663213599) to upvote Mursy")
    message.author.send({ embeds: [inviteEmbed] });
  }
}
