const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'clear',
  description: "Clears Past Messages",
  async execute(client, message, cmd, args, Discord){
    let member = message.author.username;

    if(message.member.permissions.has('ADMINISTRATOR')){
    if(!args[0]) return message.reply("Please enter the amount of messages to clear!");
    if(isNaN(args[0])) return message.reply("Please Enter the amount of messages to clear!");

    if(args[0] > 100) return message.reply("Please enter an amount below 100 messages!");
    if(args[0] < 1) return message.reply("What you doing silly you can't clear negative number");



    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
      message.channel.bulkDelete(messages).catch(err => console.log(err)).then(() => {

          })
          const message2Embed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${args[0]} Messages Cleared`)
          const message1Embed = new MessageEmbed()
          .setColor('GREEN')
          .setDescription(`${args[0]} Message Cleared`)



      if(args[0] > 1){
        message.channel.send({ embeds: [message2Embed] })
      console.log(`clear command accessed by ${member} to clear ${args[0]} Messages `)
    };


      if(args[0] < 2){
      message.channel.send({ embeds: [message1Embed] }).catch(err => console.log(err));;
      console.log(`clear command accessed by ${member} to clear ${args[0]} Message `)
}
    })
  } else {
    const accessEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription(`You Don't Have Enough Permissions To Execute This Command!`)
          message.channel.send({ embeds: [accessEmbed] });

}
}
}
