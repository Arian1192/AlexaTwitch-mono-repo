const Kafka = require('node-rdkafka');
const { client } = require('tmi.js');
const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});
const { ChannelEmoteHandler } = require('./ChannelEmoteHandler')

module.exports = function (client) {
    consumer.connect();
    consumer.on('ready', function () {
        console.log('Emote consumer ready.') // we can start consuming messages
        consumer.subscribe(['emotes']) // subscribe to the topic 'test'
        consumer.consume() // start consuming messages
    }).on('data', (data) => { 
        const message = JSON.parse(data.value); // deserialize the message 
        ChannelEmoteHandler(message, client);
    });
}

// const { ConsumerConnection } = require('../../../utils/ConsumerConnection');
// const { ChannelEmoteHandler } = require('./ChannelEmoteHandler');

// module.exports = function (client) {
//     ConsumerConnection('emotes', ChannelEmoteHandler, client);
// }

// TO DO Comprobar que el comando funcione bien ya que no esta funcionando correctamente
