const { Discord, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'ban',
     description: "bans user from guild",
     execute(client, message, cmd, args, Discord){
    const member = message.mentions.users.first();
    const user = message.mentions.members.first();
    let admin = message.author.username;
    let server = message.guild.name;
    let reason = args.join(" ").slice(22);
    if(!reason) reason = "No reason provided";

    const embed = new MessageEmbed()
    .setDescription("`Please remember to mention the user **(Members, UserID)**`")
    .setColor("YELLOW")

    const embed1 = new MessageEmbed()
    .setDescription("You dont have enough permissions to execute this command!")
    .setColor("RED")

    const embed2 = new MessageEmbed()
    .setDescription("`You Cannot ban an Admin`")
    .setColor("RED")


    const embed4 = new MessageEmbed()

    .setTitle(`You have been banned from ${server}!`)
    .setThumbnail(`${message.guild.iconURL()}`)
    .addField('Reason:', `${reason}`)
    .setFooter(`you were banned by ${admin}`)
    .setTimestamp()
    .setColor('RED')




        if(!message.mentions.users.first()) return message.channel.send({ embeds: [embed] })
        if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send({ embeds: [embed1] })
        if(!user.kickable) return message.channel.send({ embeds: [embed2] })
        const memberTarget = message.guild.members.cache.get(member.id)
        if(!!message.mentions.users.first() && message.member.permissions.has('KICK_MEMBERS')) {

          const embed3 = new MessageEmbed()
          .setColor("BLACK")
          .setThumbnail(message.mentions.users.first().displayAvatarURL())
          .setDescription(`<@${memberTarget.user.id}> has been banned!`)
          .addField('Reason', `${reason}` )
          .setFooter(`Banned by ${admin}`)
          .setTimestamp()

          user.send({ embeds: [embed4] })
              setTimeout(function(){
                user.ban().catch(err => console.log(err)).then(() => {
                    message.channel.send({ embeds: [embed3] })
                    message.channel.bulkDelete(1);
                  }, 10000);
                })
        }
        }
    }
