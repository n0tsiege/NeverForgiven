module.exports = {
    name: 'invite',
    description: 'Shows an invite to bring NeverForgiven to your own server!',
    execute(message, args){
        message.channel.send('Invite NeverForgiven to your own server using this link: <https://discord.com/oauth2/authorize?client_id=826202558342103060&scope=bot&permissions=8>.')
    }
}