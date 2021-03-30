module.exports = {
    name: 'version',
    description: 'A bot version checker command.',
    execute(message, args){
        message.channel.send('NeverForgiven is in version 1.0-beta.')
    }
}