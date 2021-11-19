const { MessageEmbed } = require('discord.js')
const prefix = '.'
module.exports = {
  name: 'help',
  aliases: ['cmd','command'],
  description: "shows commands",
  execute(client, message, cmd, args, Discord){
    const member = message.author.username;
    const helpEmbed = new MessageEmbed()
    	.setColor('BLACK')
      .setThumbnail(`https://cdn.discordapp.com/icons/882449110806982667/bc97472a79a846aecbdb53cba68105bc.webp`)
    	.setTitle("Mursy Help")
    	.setDescription('[Invite Mursy](https://discord.com/oauth2/authorize?client_id=882458361663213599&scope=bot) | Prefix `.` ')
    	.addFields(
        { name: 'Administration Features', value: '_', inline: false },
    		{ name: '`ban <member>`', value: 'Bans unwanted people', inline: true },
        { name: '`kick <member>`', value: 'kicks unwanted people', inline: true },
        { name: '`mute <member>`', value: 'mutes members | ensure you have the role `**muted**`', inline: true },
        { name: '`unmute <member>`', value: 'unmutes members', inline: true },
        { name: '`tempmute <member> <value>`', value: 'Temporarily Mutes Members **s/h/d/y**', inline: true },
        { name: '`clear <value>`', value: 'Clears up to 100 messages', inline: true },
        { name: '`giveaway <time s/m/d/y> <giveaway item>`', value: 'Allows Admins to host giveaways', inline: true },
        { name: '`ticket`', value: 'Creates Ticket Channels', inline: true },
    //    { name: ' Music ', value: 'Still Under Development', inline: false },
    //    { name: '`play <songname>`', value: 'Plays Music in Voice Chat(Still Under Development)', inline: true },
    //    { name: '`stop`', value: 'Stops music playback', inline: true },
        { name: 'Fun', value: '_', inline: false },
        { name: '`8ball`', value: 'Ask The Bot a question and it shall reply', inline: true },
        { name: '`meme`', value: 'Get a meme generated', inline: true},
        { name: '`coinflip`', value: 'Flip a Coin', inline: true },
        { name: '`kill`', value: 'Murder a Requested Member', inline: true},
        { name: '`kiss`', value: 'Kiss a Fellow User', inline: true},
        { name: '`hug`', value: 'Hug a Fellow User', inline: true},
        { name: '`slap`', value: 'Slap a Fellow User', inline: true },
        { name: '`eat`', value: 'Bite a fellow user', inline: true },
        { name: '`assimilate`', value: 'Assimilate a Fellow user', inline: true},
        { name: '`punch`', value:'Punch A Fellow User', inline: true },
        { name: '`stab`', value: 'Stab a fellow user', inline: true }
    	)
      .setFooter(`Help Requested by ${member}`)
    	.setTimestamp()

    message.channel.send({ embeds: [helpEmbed] });

        console.log(`help command accessed by ${member}`)

  }
}
