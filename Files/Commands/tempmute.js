const ms = require('ms');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'tempmute',
  aliases: ['tm'],
  description: "tempmutes people in your server",
  execute(client, message, cmd, args, Discord){
console.log(args)
    const member = message.mentions.users.first();
    let admin = message.author.username;
    let server = message.guild.name;
    const user = message.mentions.members.first();
  //  let dmMute = message.user.displayAvatarURL();
    let reason = args.join(" ").slice(26);
    if(!reason) reason = "No reason provided";
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
        .setTitle('Tempmute 🔇')
        .setThumbnail(message.mentions.users.first().displayAvatarURL())
        .setDescription(`<@${memberTarget.user.id}> has been temporarily muted!`)
        .addField('Duration:', `${ms(ms(args[1]))}`)
        .addField('Reason', `${reason}`)
        .setFooter(`Tempmuted by ${admin}`)
        .setTimestamp()


      const dmEmbed = new MessageEmbed()
      .setColor('RED')
      .setThumbnail(`${message.guild.iconURL()}`)
      .setDescription(`You were temporarily muted on **${server}** for **${ms(ms(args[1]))}**`)
      .addField('Duration:', `${ms(ms(args[1]))}`)
      .addField('Reason:', `${reason}`)
      .setFooter(`You were muted by ${admin}`)
      .setTimestamp()



      message.channel.send({ embeds: [tempmuteEmbed] });
      user.send({ embeds: [dmEmbed] });
      message.channel.bulkDelete(1);


      const autoEmbed = new MessageEmbed()
        .setColor('BLACK')
        .setDescription(`<@${memberTarget.user.id}> Has Been Automatically Unmuted`)

      const autoDmEmbed = new MessageEmbed()
      .setColor('GREEN')
      .addField(`You were Automatically unmuted on`, `${server}!`)


      setTimeout(function(){
        memberTarget.roles.remove(muteRole.id)
        user.send({ embeds: [autoDmEmbed] });
        message.channel.send({ embeds: [autoEmbed] });
        setTimeout(function(){
        message.channel.bulkDelete(1);
     }, 2000);
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
