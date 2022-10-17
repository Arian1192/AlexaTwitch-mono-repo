require('dotenv').config();
const { SetClientCommand } = require('../../../utils/SetClientCommand')
const { CommandOptions } = require('../../../utils/CommandOptions')

const ChannelSubsModeHandler = (string, client) =>{
    const command = string
    if (command === CommandOptions.subsonly) SetClientCommand(client, command)
    if (command === CommandOptions.subsonlyoff) SetClientCommand(client, command)
    if (command !== CommandOptions.subsonly && command !== CommandOptions.subsonlyoff){
        console.log(`El comando introducido no es valido, el comando introducido ha sido ${command}`)
    }
}

module.exports = { ChannelSubsModeHandler }