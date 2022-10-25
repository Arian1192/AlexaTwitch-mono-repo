require('dotenv').config();
const { SetClientCommand } = require('../../../utils/SetClientCommand')
const { CommandOptions } = require('../../../utils/CommandOptions')

const ChannelFollowersHandler = (string, client) => {
    const command = string
    if (command === CommandOptions.followersonly) SetClientCommand(client, command)
    if (command === CommandOptions.followersonlyoff) SetClientCommand(client, command)
    if (command !== CommandOptions.followersonly && command !== CommandOptions.followersonlyoff){
        console.log(`El comando introducido no es valido, el comando introducido ha sido ${command}`)
    }
}

module.exports = { ChannelFollowersHandler }
