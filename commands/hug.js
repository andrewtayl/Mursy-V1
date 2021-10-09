const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'hug',
  description: 'hug another user',
  execute(client, message, cmd, args, Discord){

    let member = message.author.username;
    console.log(`hug command accessed by ${member}`)


    if(!args[0]) return message.channel.send(`**${member}**, Please Mention a User!`);

    let hug = [
      "https://external-preview.redd.it/AI3Jl28kpovVFo20G49OS8Wwi9dOO0nChHuHBHMumLc.gif?s=9cc2381beb3fc075eccc773dcabbb61d9a28547b",
      "https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif",
      "https://66.media.tumblr.com/51634879ac7bf643272d57e4fabf40d8/tumblr_pe53mltmMd1ucf2fl_540.gif",
      "https://c.tenor.com/yoYwKY03PFgAAAAC/lilo-and-stitch-hugs.gif",
      "https://acegif.com/wp-content/uploads/hugs-16.gif"

    ]


    let image = Math.floor((Math.random() * hug.length))



    let hugEmbed = new MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(hug[image])
    .setDescription(`**${member}** Hugged ${args}`)


    message.channel.send({ embeds: [hugEmbed] })

  }

}
