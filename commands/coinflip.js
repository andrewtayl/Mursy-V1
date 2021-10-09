const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'coinflip',
  aliases: ['cf'],
  description: 'flips a coin to solve arguments',
  execute(client, message, cmd, args, Discord){

let fullEmbed = new MessageEmbed()
.setColor("RED")
.setDescription("Please ask a full question!")



let replies = ["Heads" , "Tails"];

let result = Math.floor((Math.random() * replies.length))


let ballembed = new MessageEmbed()
.setColor("GREEN")
.setTitle("Heads? or Tails?")
.setDescription(replies[result])
.setTimestamp()
.setFooter("CoinFlip");

message.channel.send({ embeds: [ballembed] })

  }



}
