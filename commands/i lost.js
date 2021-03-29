module.exports = {
    name: 'lost',
    description: 'says i lost in either se or en',
    execute(message, args) {
        let sentencelist = [
            `i lost <:kreygasm:746141414404128798>`,
            `jag forlorat <:kreygasm:746141414404128798>`,
        ];

        let sentence = sentencelist[Math.floor(Math.random() * sentencelist.length)];
    message.channel.send(sentence)
    }
}