const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
const { MessageEmbed } = require('discord.js')

module.exports ={
  name: 'meme',
   description: "generates memes",
  async execute(client, message, cmd, args, Discord){

    let reddit = [
      "meme",
      "AnimeFunny",
      "animememes",
      "dankmemes",
      "dankmeme",
      "wholesomememes",
      "MemeEconomy",
      "techsupportanimals",
      "meirl",
      "me_irl",
      "2meirl4meirl",
      "AdviceAnimals"
    ]



    let random = Math.floor(Math.random() * reddit.length - 1);
    random = random < 0 ? 0 : random;
    let subreddit = reddit[random];



    console.log(`Chose ${subreddit} since random was ${random}`)
    const url = await randomPuppy(subreddit).catch(() => {});
    console.log(`URL is  ${url}`)
    if (!url.endsWith('.png') && !url.endsWith('.jpg')) return this.execute(message, args, Discord);
    const res = await snekfetch.get(url).catch(() => {});
    console.log(`RES is  ${res}`)

    const memeEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`Meme From /r/${subreddit}`)
      .setImage(`${url}`)
      .setTimestamp()
      .setFooter(`${url}`)


    const m = await message.channel.send({ embeds: [memeEmbed] }).catch(() => {});
    if (!m || !m.id) this.execute(message, args, Discord);
   }
}
