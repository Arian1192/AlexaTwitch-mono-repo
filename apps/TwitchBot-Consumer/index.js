const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
    connection: {
        reconnect: true // -> Configuramos la instancia para reconectar si se desconecta.
    },
    channels: [process.env.TWITCH_USERNAME] // -> Configuramos el canal al que nos vamos a conectar.
    ,
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    }
})


console.log('Conectando al canal de Twitch...');
client.connect();
//------------------ requerimos los modulos --------------------
/*require('./src/Commands/command')(client);*/  // -> Importamos el archivo command.js
require('./src/Chat/SlowMode/slowMode')(client); // -> Importamos el archivo slowMode.js
require('./src/Chat/Emotes/emotes')(client); // -> Importamos el archivo emotes.js
require('./src/Chat/Subs/subs')(client); // -> Importamos el archivo subs.js