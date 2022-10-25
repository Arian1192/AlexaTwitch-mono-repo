require('dotenv').config();
const { SetClientCommand } = require("../../../utils/SetClientCommand")
const { CommandOptions } = require("../../../utils/CommandOptions")

const ChannelEmoteHandler = (string, client) => {
    const command = string
    if(command === CommandOptions.emoteonly) SetClientCommand(client, command)
    if (command === CommandOptions.emoteonlyoff) SetClientCommand(client, command)
    if (command !== CommandOptions.emoteonly && command !== CommandOptions.emoteonlyoff){
        console.log(`El comando introducido no es valido, el comando introducido ha sido ${command}`)
    }
}

module.exports = { ChannelEmoteHandler }
