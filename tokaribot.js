const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return client.users.get(mention);
    }
}

function getUserFromMentionRegEx(mention) {
    const matches = mention.match(/^<@!?(\d+)>$/);

    if (!matches) return;

    const id = matches[1];

    return client.users.get(id);
}

client.once('ready', () => {
    console.log('TokariBot is now running. NOTE: Coding might not be 100% operational and could result in a crash if code was faulty.');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if ('message', message=> {
        if (message.isMentioned(client.user)) {
            message.reply('message here');
        }
    });

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('That command is only allowed to be executed within the server. Please try again.');
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('This command is either not available, down for maintenance, or the coding is faulty.');
    }

    if (command === './rank.js') {
        if (!message.mentions.users.size) {
            return message.reply(noMention);
        }

        const taggedUser = message.mentions.users.first();

        message.channel.send(`${taggedUser.username}` + hasMention)};

});

client.login(token);