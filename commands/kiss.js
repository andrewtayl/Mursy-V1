const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'kiss',
  description: 'kiss another user',
  execute(client, message, cmd, args, Discord){

    let member = message.author.username;
//    let bot = "@Mursy";

    if(!args[0]) return message.channel.send(`**${member}**, Please Mention a User!`);
  //  if(args[0] = member) return message.channel.send("You cannot Kiss Yourself!");
  //  if(args[0] = bot) return message.channel.send("You cannot kiss me I am a robot Prevert!!!")
    let kiss = [
      "https://c.tenor.com/ErAPuiWY46QAAAAC/kiss-anime.gif",
      "https://i.pinimg.com/originals/f7/e8/a4/f7e8a4abac5d9e64784bd97480863a19.gif",
      "https://c.tenor.com/SqpFZQfcyEgAAAAM/anime-kiss.gif",
      "https://37.media.tumblr.com/7bbfd33feb6d790bb656779a05ee99da/tumblr_mtigwpZmhh1si4l9vo1_500.gif",
      "https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
      "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-14.gif",
      "https://i.redd.it/y4crk6zfd6g51.gif",

    ]


    let image = Math.floor((Math.random() * kiss.length))



    let kissEmbed = new MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(kiss[image])
    .setDescription(`**${member}** Kissed ${args}`)


    message.channel.send({ embeds: [kissEmbed] })

  }

}
