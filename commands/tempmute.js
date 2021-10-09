const ms = require('ms');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'tempmute',
  description: "tempmutes people in your server",
  execute(client, message, cmd, args, Discord){




console.log(args)
    const member = message.mentions.users.first();
    if(message.member.permissions.has('MUTE_MEMBERS')){
      const target = message.mentions.users.first();
      if(target){
          let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

          let memberTarget = message.guild.members.cache.get(target.id);

          if(!args[1]){
            const warnEmbed = new MessageEmbed()
            	.setColor('RANDOM')
            	.setDescription(`Make sure to add a timelimit`)
            message.channel.send({ embeds: [warnEmbed] });
          return
      }
      memberTarget.roles.add(muteRole.id)
      const tempmuteEmbed = new MessageEmbed()
        .setColor('BLACK')
        .setDescription(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
      message.channel.send({ embeds: [tempmuteEmbed] });

      const autoEmbed = new MessageEmbed()
        .setColor('BLACK')
        .setDescription(`<@${memberTarget.user.id}> Has Been Automatically Unmuted`)



      setTimeout(function(){
        memberTarget.roles.remove(muteRole.id)
        message.channel.send({ embeds: [autoEmbed] });


      }, ms(args[1]));

    }else {
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
