const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'mute',
  description: "mutes people in your server",
  execute(client, message, cmd, args, Discord){
    const member = message.mentions.users.first();
    if(message.member.permissions.has('MUTE_MEMBERS')){
      const target = message.mentions.users.first();



      if(target){
          let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
          let memberTarget = message.guild.members.cache.get(target.id);


          memberTarget.roles.add(muteRole.id)
          const muteEmbed = new MessageEmbed()
          	.setColor('RANDOM')
          	.setDescription(`<@${memberTarget.user.id}> has been muted.`)
          message.channel.send({ embeds: [muteEmbed] });


      } else {
        const mentionEmbed = new MessageEmbed()
          .setColor('YELLOW')
          .setDescription(`Please remember to mention the user *(Members, UserID)`)
        message.channel.send({ embeds: [mentionEmbed] });
      }
    } else {
      const accessEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`You Don't Have Enough Permissions To Execute This Command!`)

      message.channel.send({ embeds: [accessEmbed] });

    }
  }
}
