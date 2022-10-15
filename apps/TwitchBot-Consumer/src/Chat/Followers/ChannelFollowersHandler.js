const { client } = require('tmi.js');
require('dotenv').config();

const ChannelFollowersHandler = (string, client) =>{
    const message = string
    console.log(message)
    switch (message) {
        case 'followersonly':
            client.followersonly(`${process.env.TWITCH_USERNAME}`, 120)
                .then((data) => console.log(`${process.env.TWITCH_USERNAME} esta en modo de seguidores`))
                .catch((err) => console.log(err))
            break;
        case 'followersonlyoff':
            client.followersonlyoff(`${process.env.TWITCH_USERNAME}`)
                .then((data) => console.log(`${process.env.TWITCH_USERNAME} ya no esta en modo de seguidores`))
                .catch((err) => console.log(err))
            break;
        default:
            console.log(`no se ha podido cambiar el modo de seguidores el comando introducido ha sido ${message}`)
            break;
    }
}

module.exports = { ChannelFollowersHandler }
