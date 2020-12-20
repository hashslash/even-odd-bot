const Discord = require("discord.js");
const client = new Discord.Client();

//Ready
client.on("ready", () => {
    console.log(`${client.user.tag} Ready!`);
})


//Message
client.on("message", message => {
    const input = message.content;
    if (input.match(/!eo \d/ig)) {
        let number = input.substring(4);
        try {
            number = Number.parseInt(number);
        } catch {
            message.reply("The number is invalid")
            return;
        }
        if (Number.isFinite(number)) {
            if (Number.isInteger(number)) {
                if (number % 2 == 0)
                    message.reply(`${number} is Even`)
                else
                    message.reply(`${number} is Odd`)
            } else {
                message.reply("The number must be integer")
            }
        } else {
            message.reply("The number must be finite")
        }
    } else {
        if (input.substring(0, 4) === "!eo ")
            message.reply("Wrong Format! Type ```!eo <number>```");
    }
})
client.login(process.env.DISCORD_TOKEN);