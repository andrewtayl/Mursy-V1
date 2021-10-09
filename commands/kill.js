const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'kill',
  description: 'kill another user',
  execute(client, message, cmd, args, Discord){
let member = message.author.username;
    console.log(`kill command accessed by ${member}`)



    if(!args[0]) return message.channel.send(`**${member}**, Please Mention a User!`);

    let death = [
      "https://i.pinimg.com/originals/27/3f/2d/273f2de245154f68ff1f3ff87dd9c929.gif",
      "https://qph.fs.quoracdn.net/main-qimg-1c7b4119a161023924027ab20136f523",
      "https://66.media.tumblr.com/01779bfcfcbc0b124656446c46fa19a5/tumblr_n0qxf9Mj8o1sgx3vdo3_500.gif",
      "https://thumbs.gfycat.com/UnrealisticUnlinedIndigowingedparrot-max-1mb.gif",
      "https://c.tenor.com/kMcVFwTTRdMAAAAM/yuno-gasai-future-diary.gif",

    ]

    let replies = [
      `**${args}** was killed by **${member}**`,
      `**${args}** was shot down by **${member}**`,
      `**${args}** was terminated by **${member}**`,
      `**${args}** Slipped On A banana Peel`,
      `A Piano Fell on ${args}`,
      `**${args}** Died On the way to the hospital`,
      `**${args}** Died By Explosive Diaherra`,
      `**${member}** Poisoned ${args}`,
      `${args} dodged **${member}** attack`,
      

    ]

    let image = Math.floor((Math.random() * death.length))


    let result = Math.floor((Math.random() * replies.length))


    let killEmbed = new MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(death[image])
    .setDescription(`${member} killed ${args}`)
    .setFooter(`${args} was killed `)
    .setTimestamp()


    message.channel.send({ embeds: [killEmbed] })

    setTimeout(function(){
        message.channel.send(replies[result])
     }, 5000);


  }

}
