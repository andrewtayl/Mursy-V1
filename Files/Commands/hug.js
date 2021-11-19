const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'hug',
  description: 'hug another user',
  execute(client, message, cmd, args, Discord){
    let reason = args.join(" ").slice(22);
    let member = message.author.username;
    let user = message.mentions.users.first()

    console.log(`hug command accessed by ${member}`)


    if(!user) return message.channel.send(`**${member}**, Please Mention a User!`);


    let hug = [
      "https://external-preview.redd.it/AI3Jl28kpovVFo20G49OS8Wwi9dOO0nChHuHBHMumLc.gif?s=9cc2381beb3fc075eccc773dcabbb61d9a28547b",
      "https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif",
      "https://66.media.tumblr.com/51634879ac7bf643272d57e4fabf40d8/tumblr_pe53mltmMd1ucf2fl_540.gif",
      "https://c.tenor.com/yoYwKY03PFgAAAAC/lilo-and-stitch-hugs.gif",
      "https://acegif.com/wp-content/uploads/hugs-16.gif"

    ]


    let image = Math.floor((Math.random() * hug.length))





if (!reason){
    let mention = message.mentions.users.first().username;
  //without args[0]
      let hugEmbed = new MessageEmbed()
      .setColor("GREEN")
      .setThumbnail(hug[image])
      .setDescription(`**${member}** Hugged **${mention}**`)
    message.channel.send({ embeds: [hugEmbed] })

} else {
  let mention = message.mentions.users.first().username;
  //with args[0]
      let reasonHugEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(hug[image])
      .setTitle(`**${member}** Hugged **${mention}**`)
      .addField("Reason:", `${reason}`)
  message.channel.send({ embeds: [reasonHugEmbed] })
}
  }

}
