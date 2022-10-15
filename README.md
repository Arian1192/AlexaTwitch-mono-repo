# AlexaTwitch
## Skill de alexa para bot de twitch


Este Repositorio es un proyecto de crecimiento personal, en los que voy a usar tecnologias como por ejemplo Kafka para comunicar una serie de microservicios
La idea de este proyecto es utilizar una skill de Alexa, el asistente personal mas conocido del mercado, para enviar comandos a nuestro chat de twitch y evitar tener que teclear nosotros mismos el comando, o por el contrario tener a un moderador para que realice estas gestiones.

## Tech

AlexaTwitch usa estas tecnologias:

- [Kakfka] - Como tecnologia para transmision de mensajes tipo publish subscribe
- [Docker] - Para levantar una imagen de Kafka y Zookeeper
- [node.js] - Como entorno en tiempo de ejecución
- [Express] - El framework mas usado para aplicaciones node.js


## Instalación 

```sh
cd AlexaTwitch-mono-repo
npm i
npm run start:both 
```


