const { client } = require("tmi.js");
require('dotenv').config();

const ChannelSubsModeHandler = (string, client) =>{
    const message = string
    console.log(`Este es el mensaje que esta llegando ${message}`)
    switch (message) {
        case 'subsonly':
            client.subscribers(`${process.env.TWITCH_USERNAME}`)
                .then((data) => console.log(`${process.env.TWITCH_USERNAME} esta en modo subs`))
                .catch((err) => console.log(err))
            break;
        case 'subsonlyoff':
            client.subscribersoff(`${process.env.TWITCH_USERNAME}`)
                .then((data) => console.log(`${process.env.TWITCH_USERNAME} ya no esta en modo subs`))
                .catch((err) => console.log(err))
            break;
        default:
            console.log(`no se ha podido cambiar el modo subs el comando introducido ha sido ${message}`)
            break;
    }
}

module.exports = { ChannelSubsModeHandler }