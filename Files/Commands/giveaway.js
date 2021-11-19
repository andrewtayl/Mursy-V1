const ms = require('ms');
const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'giveaway',
  description: 'start a giveaway',
 async execute(client, message, cmd, args, Discord){
   let author = message.author.username;
   let creator = message.author.id;
   var title = "";
    var time;
    for (var i = 1; i < args.length; i++) {
      title += (args[i] + " ");
    }
    const errorEmbed = new MessageEmbed()
    .setColor("RED")
    .setTitle(`Giveaway 🎉`)
    .setDescription(`Invalid Duration Provided`)
    .addField('Example:', '`.giveaway <time s/h/d/y> <Item>`')

    time = args[0];
    if (!time) {
      return message.channel.send({ embeds: [errorEmbed] })
    }
    if (!title) {
      title = "No title"
    }

    if(!ms(time)){
      return message.channel.send({ embeds: [errorEmbed] })
    }

  if(!message.member.permissions.has(['ADMINISTRATOR'])){
     message.channel.send(`Sorry **${author}** But you don't have enough permissions to use this command!`)
   } else {
if(message.member.permissions.has(['ADMINISTRATOR'])){
    let giveawayEmbed = new MessageEmbed()
    .setColor('BLACK')
    .setThumbnail(`${message.author.displayAvatarURL()}`)
    .setTitle(`${author}'s Giveaway 🎉`)
    .addField(`Prize:`, `${title}`)
    .addField(`Duration :`, ms(ms(time), {
      long: true
    }), true)
    .setFooter("React to this message with 🎉 to participate ! Ends")
    .setTimestamp(Date.now() + ms(time))

message.channel.bulkDelete(1);

  var giveawaySent =  await message.channel.send({ embeds: [giveawayEmbed] });
      giveawaySent.react('🎉');




setTimeout(async function(){

  var react = await giveawaySent.reactions.cache.find(r => r.emoji.name === '🎉').users.fetch();
  react = react.filter(u => u.id !== '882458361663213599')
  const reactArray = react.map(c => c)
  let index = Math.floor(Math.random() * reactArray.length);
  let winner = reactArray[index];

  console.log(reactArray)
  console.log(index)
  console.log(winner)



  if(!winner){
    let noWinnerEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle(`${author}'s Giveaway 🎉`)
    .setDescription(`Unfortantely no one reacted to This giveaway so there we're no winners`)
    .addField(`Giveaway For:`, `${title}`)
    .setFooter(`Ended`)
    .setTimestamp()
    message.channel.send({ embeds: [noWinnerEmbed] })
  } else {

    let winnerEmbed = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`**Congratulations 🎉**`)
    .setDescription(`Winner is ${winner}`)
    .addField(`You Won :`, `${title}`)
    .setFooter(`Ended`)
    .setTimestamp()
    message.channel.send(`<@${creator}> The Winner Has been Drawn!`)
  message.channel.send({ embeds: [winnerEmbed] })
}
}, ms(time))
}

}

    }
  }
