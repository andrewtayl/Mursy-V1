module.exports = {
  name: 'closeticket',
  aliases: ["close"],
  description: 'Start A Ticket',
 async execute(client, message, cmd, args, Discord){
let admin = message.member.permissions.has('ADMINISTRATOR')

if(admin){
   message.channel.send('Deleting In 5 seconds')
   setTimeout(function(){
     message.channel.delete()
    }, 5000);
} else {
  message.channel.send(`Sorry **${message.author.username}**, Only Administrator's can Close a Ticket`)
}

 }
}
