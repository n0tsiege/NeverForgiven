module.exports = {
    name: 'ping',
    description: 'Ping command (basically checks if the bot is online)',
    execute(message, args){
        message.channel.send('Pong! NeverForgiven is online.')
    }
}