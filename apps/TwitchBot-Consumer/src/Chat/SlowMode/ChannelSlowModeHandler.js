const { client } = require('tmi.js');
require('dotenv').config();

const ChannelSlowModeHandler = (string, client) =>{
    const message = string
    console.log(message)
    switch (message) {
        case 'slow':
            client.slow(`${process.env.TWITCH_USERNAME}`, 120)
                .then((data) => console.log(`${process.env.TWITCH_USERNAME} esta en modo lento`))
                .catch((err) => console.log(err))
            break;
        case 'slowoff':
            client.slowoff(`${process.env.TWITCH_USERNAME}`)
                .then((data) => console.log(`${process.env.TWITCH_USERNAME} ya no esta en modo lento`))
                .catch((err) => console.log(err))
            break;
        default:
            console.log(`no se ha podido cambiar el modo lento el comando introducido ha sido ${message}`)
            break;
    }
}

module.exports = { ChannelSlowModeHandler }