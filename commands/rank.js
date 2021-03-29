module.exports = {
    name: 'lolrank',
    description: "says what rank you're in",
    execute(message, args) {
        var ranks = [
            "Water",
            "Paper",
            "Wood",
            "Cement",
            "Bronze",
            "Iron",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
            "Master",
            "GrandMaster",
            "Challenger"
        ];

        var ranknumber = [
            "I",
            "II",
            "III",
            "IV"
        ];

        var noMention = `Your future League of Legends rank is ` + ranks[Math.floor(Math.random() * ranks.length)] + ` ` + ranknumber[Math.floor(Math.random() * ranknumber.length)] + ` ` + [Math.floor(Math.random() * (100 - 0) + 0)] + `LP`;
        var hasMention = `'s League of Legends rank is ` + ranks[Math.floor(Math.random() * ranks.length)] + ` ` + ranknumber[Math.floor(Math.random() * ranknumber.length)] + ` ` + [Math.floor(Math.random() * (100 - 0) + 0)] + `LP`;

    }
}