const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'slap',
  description: 'slap another user',
  execute(client, message, cmd, args, Discord){
    let reason = args.join(" ").slice(22);
    let user = message.mentions.users.first();
    let member = message.author.username;


    if(!user) return message.channel.send(`**${member}**, Please Mention a User!`);

    let slap = [
      "https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif",
      "https://i.imgur.com/fm49srQ.gif",
      "https://i.imgur.com/Li9mx3A.gif",
      "https://i.gifer.com/WpWp.gif",

    ]


    let image = Math.floor((Math.random() * slap.length))



    if (!reason){
        let mention = message.mentions.users.first().username;
      //without args[0]
          let slapEmbed = new MessageEmbed()
          .setColor("GREEN")
          .setThumbnail(slap[image])
          .setDescription(`**${member}** Slapped **${mention}**`)
        message.channel.send({ embeds: [slapEmbed] })

    } else {
      let mention = message.mentions.users.first().username;
      //with args[0]
          let reasonSlapEmbed = new MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(slap[image])
          .setTitle(`**${member}** Slapped **${mention}**`)
          .addField("Reason:", `${reason}`)
      message.channel.send({ embeds: [reasonSlapEmbed] })
    }
  }


}
