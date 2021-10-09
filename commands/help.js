const { MessageEmbed } = require('discord.js')
const prefix = '.'
module.exports = {
  name: 'help',
  description: "shows commands",
  execute(client, message, cmd, args, Discord){
    const member = message.author.username;
    const helpEmbed = new MessageEmbed()
    	.setColor('BLACK')
    	.setTitle('Help')
    	.setDescription('Prefix  `.`')
      .addField('Provides Commands and How they Work', '_', false)
    	.addFields(
        { name: '`help`', value: 'gives you this menu', inline: true },
    		{ name: '`invite`', value: 'invite this bot to your server', inline: true },
        { name: 'Administration Features', value: '_', inline: false },
    		{ name: '`ban <member>`', value: 'Bans unwanted people', inline: true },
        { name: '`kick <member>`', value: 'kicks unwanted people', inline: true },
        { name: '`mute <member>`', value: 'mutes members `ensure you have the role **muted**`', inline: true },
        { name: '`unmute <member>`', value: 'unmutes members', inline: true },
        { name: '`tempmute <member> <value>`', value: 'Temporarily Mutes Members **s/h/d/y**', inline: true },
        { name: '`clear <value>`', value: 'Clears up to 100 messages', inline: true },
    //    { name: ' Music ', value: 'Still Under Development', inline: false },
    //    { name: '`play <songname>`', value: 'Plays Music in Voice Chat(Still Under Development)', inline: true },
    //    { name: '`stop`', value: 'Stops music playback', inline: true },
        { name: 'Fun', value: '_', inline: false },
        { name: '`8ball`', value: 'Ask The Bot a question and it shall reply', inline: true },
        { name: '`meme`', value: 'Get a meme generated', inline: true},
        { name: '`coinflip`', value: 'Flip a Coin', inline: true },
        { name: '`kill`', value: 'Murder a Requested Member', inline: true},
        { name: '`kiss`', value: 'Kiss a Fellow User', inline: true},
        { name: '`hug`', value: 'Hug a Fellow User', inline: true}
    	)
    	.setTimestamp()
    	.setFooter('Mursy Powered by NaturalTwitch');

    message.channel.send({ embeds: [helpEmbed] });

        console.log(`help command accessed by ${member}`)




    }
    }
