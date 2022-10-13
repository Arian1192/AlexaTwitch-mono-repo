const Kafka = require('node-rdkafka');
const { client } = require('tmi.js');
const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});
const { ChannelSlowModeHandler } = require('./ChannelSlowModeHandler')

module.exports = function (client) {
    consumer.connect();
    consumer.on('ready', function () {
        console.log('SlowMode consumer ready.') // we can start consuming messages
        consumer.subscribe(['slowmode']) // subscribe to the topic 'slowmode'
        consumer.consume() // start consuming messages
    }).on('data', (data) => { 
        const message = JSON.parse(data.value); // deserialize the message 
        ChannelSlowModeHandler(message, client);
    });
}
