const Discord = require('discord.js')
const client = new Discord.Client

const token = ''

const prefix = '/';

const fs = require('fs');

const ytdl = require("ytdl-core")

var servers = {};

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('NeverForgiven is now online.');
});

client.on('message', message =>{
        if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (command == 'ping'){
            client.commands.get('ping').execute(message, args)
        } /*else if (command == 'invite'){
            client.commands.get('invite').execute(message, args)*/
        switch (command){
            case 'invite':
                client.commands.get('invite').execute(message, args)
            break;
            case 'version':
                client.commands.get('version').execute(message, args)
            break;
            case 'support':
                client.commands.get('support').execute(message, args)
            break;
            case 'play':
                client.commands.get('play').execute(message, args)
            break;
            case 'leave':
                client.commands.get('leave').execute(message, args)
            break;
        }
    }
,)

client.login(token);