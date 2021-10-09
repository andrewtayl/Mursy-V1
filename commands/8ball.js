const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: '8ball',
  description: '8ball command',
  execute(client, message, cmd, args, Discord){

let fullEmbed = new MessageEmbed()
.setColor("RED")
.setDescription("Please ask a full question!")


if(!args[2]) return message.reply({ embeds: [fullEmbed] });

let replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes Definitely", "You may rely on it", "As I see it, Yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply Hazy, Try Again", "Ask again later", "Cannot predict now", "Better not tell you now", "Concentrate and ask again", "Don't Count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very Doubtful"];

let result = Math.floor((Math.random() * replies.length))
let question = args.slice(0).join(" ");

let ballembed = new MessageEmbed()
.setAuthor(message.author.tag)
.setColor("RANDOM")
.addField("Question", question)
.addField("Anwser", replies[result]);

message.channel.send({ embeds: [ballembed] })

  }


}
