const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'unmute',
  description: "unmutes people in your server",
  execute(client, message, cmd, args, Discord){
    const member = message.mentions.users.first();
    let server = message.guild.name;
    let author = message.author.username;
    let mention = message.mentions.users.first().username;
    const user = message.mentions.members.first();
    if(message.member.permissions.has('MUTE_MEMBERS')){
      const target = message.mentions.users.first();
      if(target){
          //let mainRole = message.guild.roles.cache.find(role => role.name === 'Members');
          let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

          let memberTarget = message.guild.members.cache.get(target.id);

          memberTarget.roles.remove(muteRole.id)
          //memberTarget.roles.add(mainRole.id);
          const unmuteEmbed = new MessageEmbed()
          	.setColor('BLACK')
            .setTitle('Unmute 📢')
            .setThumbnail(message.mentions.users.first().displayAvatarURL())
          	.setDescription(`<@${memberTarget.user.id}> has been unmuted.`)
            .setFooter(`Unmuted By ${author}`)
            .setTimestamp()

          const unmuteDmEmbed = new MessageEmbed()
          .setColor('GREEN')
          .setThumbnail(`${message.guild.iconURL()}`)
          .setTitle(`You were unmuted in **${server}**!`)
          .setDescription(`**${mention}** Please Try To Follow the Rules.`)

          user.send({ embeds: [unmuteDmEmbed] });
          message.channel.send({ embeds: [unmuteEmbed] });
          message.channel.bulkDelete(1);

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
