module.exports = {
    name: 'stable',
    description: 'says random number of stability',
    guildOnly: false,
    execute(message, args) {
        message.channel.send('Currently, TokariBot is ' + math.floor((Math.random() * 100) + 1) + '% stable currently. Please note that this value is RNG. It is basically a funny test command to show the servers and coding are properly functioning. <:pepeHands:745884492438175845>';
    },
}