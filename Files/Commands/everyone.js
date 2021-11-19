module.exports = {
  name: 'everyone',
  description: 'slap another user',
  execute(client, message, cmd, args, Discord){

    let user = message.mentions.users.first();

        if(message.author.id === '513413045251342336'){
          message.channel.send('@everyone')

          setTimeout(function(){
          message.channel.bulkDelete(2);
       }, 2000);


      }
    }
}
