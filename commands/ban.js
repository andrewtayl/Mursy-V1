const { Discord, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'ban',
     description: "kicks user from guild",
     execute(client, message, cmd, args, Discord){
       const member = message.mentions.users.first();
    const user = message.mentions.members.first()
    let reason = args.join(" ").slice(22)

    const embed = new MessageEmbed()
    .setDescription("`Please remember to mention the user **(Members, UserID)**`")
    .setColor("YELLOW")

    const embed1 = new MessageEmbed()
    .setDescription("You dont have enough permissions to execute this command!")
    .setColor("RED")

    const embed2 = new MessageEmbed()
    .setDescription("`You Cannot ban an Admin`")
    .setColor("RED")





        if(!message.mentions.users.first()) return message.channel.send({ embeds: [embed] })
        if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send({ embeds: [embed1] })
        if(!user.kickable) return message.channel.send({ embeds: [embed2] })
const memberTarget = message.guild.members.cache.get(member.id)
        if(!!message.mentions.users.first() && message.member.permissions.has('KICK_MEMBERS')) {

          const embed3 = new MessageEmbed()

          .setDescription(`<@${memberTarget.user.id}> has been banned ${reason}`)
          .setColor("GREEN")
          user.ban().catch(err => console.log(err)).then(() => {
              message.channel.send({ embeds: [embed3] })
          })
        }
        }
    }
