const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
const { MessageEmbed } = require('discord.js')

module.exports ={
  name: 'porn',

   description: "generates porn",
  async execute(client, message, cmd, args, Discord){
    let porn =[
      "https://di.phncdn.com/videos/201909/23/250371331/original/(m=qJ5SY4UbeaAaGwObaaaa)(mh=yvHzFJah39fpq6W-)0.jpg",
      "https://www.hdteen.porn/contents/videos_screenshots/3000/3278/preview.jpg",
      "https://t.e-x.xyz/c191/sexx/15/918-squirting.jpg",
      "https://cdn.porngames.porn/screenshots/bdsm-sex-simulator-26.jpg",
      "https://icdn03.youtrannytube.com/15218/760857_10.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hentai_-_yuuree-redraw.jpg",
      "https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/7d/1d/be/7d1dbefa36da3548180b4fee1af5af29/7d1dbefa36da3548180b4fee1af5af29.29.jpg",
      "http://i4.toonporncomix.com/photos/galleries/29/392/13_540.jpg",
      "https://img-hw.xvideos-cdn.com/videos/thumbs169ll/a6/09/98/a6099853aefc882866d4f2c59fdd5483/a6099853aefc882866d4f2c59fdd5483.13.jpg",
      "https://www.pornmaniak.com/wp-content/uploads/2020/06/Trap-Porn-3.jpg",
      "https://img-hw.xvideos-cdn.com/videos/thumbs169lll/98/c3/89/98c389195164fa9c6377793623fa50a4/98c389195164fa9c6377793623fa50a4.24.jpg",
      "https://3.bp.blogspot.com/-gp1-w3HQsW0/WUNY20S8QmI/AAAAAAAACVo/cCecQQ3x7ms6-xnGVJNYjQhe1k9ewnWEACLcBGAs/s1600/451_TG-Caption_Body_Hopper.jpg"

    ]



    let random = Math.floor(Math.random() * porn.length - 1);
    random = random < 0 ? 0 : random;
    let googlePorn = porn[random];


console.log(`Chose ${googlePorn} since random was ${random}`)

    const memeEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`OFF TO HORNY JAIL WITH YOU`)
      .setImage(`${googlePorn}`)
      .setTimestamp()

    const sfwEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('This Channel is SFW, Please Ensure you have NSFW enabled')
    .setDescription('Please Enable NSFW, or contact your server Adminstrator')
    .setImage('https://i.imgur.com/oe4iK5i.gif')

if (message.channel.nsfw){
    await message.channel.send({ embeds: [memeEmbed] }).catch(() => {});
  } else {
    message.reply({ embeds: [sfwEmbed] }).catch(() => {});

  }
   }
}
