module.exports = {
  name: 'test',
  description: "This is the test command!",
  execute(client, message, cmd, args, Discord){


    if(message.member.permissions.has('ADMINISTRATOR')){
      message.channel.send('You are Authorized')

    } else {


    }

  }
}
