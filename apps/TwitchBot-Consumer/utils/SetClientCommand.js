require('dotenv').config();

const SetClientCommand = (client, command) => {
    client[command](`${process.env.TWITCH_USERNAME}`)
        .then((data) => {
            console.log(data)
            console.log(`${process.env.TWITCH_USERNAME} se ha ejecutado este comando ${command}`)
        })
        .catch((err) => console.log(err))
}

module.exports = { SetClientCommand }