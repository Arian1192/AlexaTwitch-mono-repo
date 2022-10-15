const {NewConsumerConnection} = require('../../../utils/NewConsumerConnection')
const { ChannelEmoteHandler } = require('./ChannelEmoteHandler')

module.exports = function (client){
    NewConsumerConnection('emotes',ChannelEmoteHandler,client);
}
// const Kafka = require('node-rdkafka');
// const { client } = require('tmi.js');
// const consumer = Kafka.KafkaConsumer({
//     'group.id': 'kafka',
//     'metadata.broker.list': 'localhost:9092'
// }, {});
// const { ChannelEmoteHandler } = require('./ChannelEmoteHandler')

// module.exports = function (client) {
//     consumer.connect();
//     consumer.on('ready', function () {
//         console.log('Emote consumer ready.') // we can start consuming messages
//         consumer.subscribe(['emotes']) // subscribe to the topic 'emotes'
//         consumer.consume() // start consuming messages
//     }).on('data', (data) => {
//         console.log(data)
//         const message = JSON.parse(data.value);
//         // deserialize the message
//         ChannelEmoteHandler(message, client);
//     });
// }
// TO DO Comprobar que el comando funcione bien ya que no esta funcionando correctamente
