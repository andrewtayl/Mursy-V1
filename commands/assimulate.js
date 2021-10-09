const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'assimilate',
  description: 'assimulate another user',
  execute(client, message, cmd, args, Discord){

let member = message.author.username;

if(!args[0]) return message.channel.send(`**${member}**, Please Mention a User!`);


let death = [
 "https://static.wikia.nocookie.net/memoryalpha/images/b/bc/Borg_drone_1%2C_tactical_cube_138.jpg/revision/latest/scale-to-width-down/600?cb=20070618061621&path-prefix=en",
 "https://nerdist.com/wp-content/uploads/2019/08/giphy-1.gif",
 "https://pa1.narvii.com/6623/e54a91bf2591e0a8dbd7616aa3507e91a83a90a3_hq.gif",
 ""
]

//let replies =[

//]
let image = Math.floor((Math.random() * death.length))


//let result = Math.floor((Math.random() * replies.length))


let killEmbed = new MessageEmbed()
.setColor("GREEN")
.setThumbnail(death[image])
.setDescription(`${member} Assimilated ${args}`)



message.channel.send({ embeds: [killEmbed] })

setTimeout(function(){
    message.channel.send("We Are The Borg!")
 }, 2000);

 setTimeout(function(){
     message.channel.send("Prepare To Be Assimilated!")
  }, 3000);

  setTimeout(function(){
      message.channel.send("Resistance is Futile!")
   }, 4000);


 }
}
