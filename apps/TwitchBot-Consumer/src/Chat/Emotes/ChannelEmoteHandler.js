// const { client } = require("tmi.js");
require('dotenv').config();

const ChannelEmoteHandler = (string, client) => {
    const message = string
    console.log(`Este es el mensaje que esta llegando ${message}`)
    switch (message) {
        case 'emoteonly':
            client.emoteonly(`${process.env.TWITCH_USERNAME}`)
                .then((data) => {
                    console.log(data)
                    console.log(`${process.env.TWITCH_USERNAME} esta en modo emotes`)
                })
                .catch((err) => console.log(err))
            break;
        case 'emoteonlyoff':
            client.emoteonlyoff(`${process.env.TWITCH_USERNAME}`)
                .then((data) => console.log(`${process.env.TWITCH_USERNAME} ya no esta en modo emotes`))
                .catch((err) => console.log(err))
            break;
        default:
            console.log(`no se ha podido cambiar el modo emotes el comando introducido ha sido ${message}`)
            break;
    }
}

module.exports = { ChannelEmoteHandler }
