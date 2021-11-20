module.exports = {
  name: 'test',
  description: "This is the test command!",
  execute(client, message, cmd, args, Discord){
let user = message.mentions.users.first();

    if(message.author.id === '513413045251342336'){
      message.channel.send('Welcome Back Sir')

    } else {
    message.channel.send('Intruder Alert!!!')
    }

  }
}

// Just a test command 