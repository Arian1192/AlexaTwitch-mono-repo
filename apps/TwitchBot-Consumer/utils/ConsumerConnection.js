const Kafka = require('node-rdkafka');
const { client } = require("tmi.js");
const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});


const ConsumerConnection = (topic, handler, client) => {
    consumer.connect();
    consumer.on('ready', function () {
        console.log(`${topic} Consumer ready.`) // we can start consuming messages
        consumer.subscribe([topic]) // subscribe to the topic 'slowmode'
        consumer.consume() // start consuming messages
    }).on('data', (data) => { 
        const message = JSON.parse(data.value);
        console.log(message) // deserialize the message 
        handler(message, client);
    });
}

module.exports = { ConsumerConnection }

