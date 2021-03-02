const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

client.once('ready', () => {
    console.log('Spookbot is online!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('Swamp Sux');
    } else if (command == 'github'){
        message.channel.send('https://www.github.com/Spooky-png');
    } else if (command == 'buddha'){
        message.channel.send('whodatboiwhohimis');
    } else if (command == 'stop'){
        message.channel.send('stopprocastinating');
    }
});







client.login('token bruh');