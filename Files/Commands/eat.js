const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'eat',
  aliases: ['nom', 'bite', 'chomp'],
  description: 'kill another user',
  execute(client, message, cmd, args, Discord){
    let member = message.author.username;
    let reason = args.join(" ").slice(22);

    if(!args[0]) return message.channel.send(`**${member}**, Please Mention a User!`);


    let eat = [
      "https://c.tenor.com/FVqibRmEe-4AAAAC/neck-bite-anime.gif",
      "https://c.tenor.com/w4T323o46uYAAAAC/anime-bite.gif",
      "https://i.pinimg.com/originals/95/9e/4c/959e4c3712933367c0a553d7a124c925.gif",
      "https://i.kym-cdn.com/photos/images/newsfeed/001/027/044/1cd.gif"
    ]


    let image = Math.floor((Math.random() * eat.length))



    if (!reason){
        let mention = message.mentions.users.first().username;
      //without args[0]
          let eatEmbed = new MessageEmbed()
          .setColor("GREEN")
          .setThumbnail(eat[image])
          .setDescription(`**${member}** Bit **${mention}**`)
        message.channel.send({ embeds: [eatEmbed] })

    } else {
      let mention = message.mentions.users.first().username;
      //with args[0]
          let reasonEatEmbed = new MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(eat[image])
          .setTitle(`**${member}** Bit **${mention}**`)
          .addField("Reason:", `${reason}`)
      message.channel.send({ embeds: [reasonEatEmbed] })
    }
  }
}
