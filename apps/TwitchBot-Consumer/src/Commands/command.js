



const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/); // -> Expresion regular para los comandos.
module.exports = function(client){
        client.on('message', (channel, tags, message, self, ctx) => {
            if (self) return; // -> Si el mensaje es del bot, no lo escucha.
            const [raw, command, args] = message.match(regexpCommand) || []; // -> Si el mensaje no es un comando, no lo escucha.
            if (command) {
                switch (command.toLowerCase()) {
                    case 'hello':
                        client.say(channel, `@${tags.username}, heya!`);
                        break;
                    case 'rrss':
                        client.say(channel, `@${tags.username}, ya te contesto yo que para eso soy un bot su 🐦 es: ${process.env.RRSS_TWITTER}, y su 📸 es ${process.env.RRSS_INSTAGRAM}`);
                        break;
                    case 'commands':
                        client.say(channel, `@${tags.username}, !hello, !rrss !commands`);
                        break;
                    default:
                        client.say(channel, `Deberias pensar dos veces antes de lanzar un comando @${tags.username}, no existe el comando -> ${command}, un saludo CRACK! 😉`);
                }
            }
        
        })
}


    


