require('dotenv').config();
const { SetClientCommand } = require('../../../utils/SetClientCommand')
const { CommandOptions } = require('../../../utils/CommandOptions')

const ChannelSlowModeHandler = (string, client) =>{
    const command = string
    if (command === CommandOptions.slow) SetClientCommand(client, command)
    if (command === CommandOptions.slowoff) SetClientCommand(client, command)
    if (command !== CommandOptions.slow && command !== CommandOptions.slowoff){
        console.log(`El comando introducido no es valido, el comando introducido ha sido ${command}`)
    }
}

module.exports = { ChannelSlowModeHandler }