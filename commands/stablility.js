module.exports = {
    name: 'stable',
    description: 'says random number of stability',
    execute(message, args) {
        message.channel.send('Currently, TokariBot is ' + [Math.floor(Math.random() * (100 - 0) + 0)] + '% stable currently. Please note that this value is RNG. It is basically a funny test command to show the servers and coding are properly functioning. <:pepeHands:745884492438175845>');
    },
}