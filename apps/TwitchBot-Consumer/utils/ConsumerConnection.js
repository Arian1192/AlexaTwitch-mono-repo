const Kafka = require('node-rdkafka');
const { client } = require("tmi.js");
const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092',
    'enable.auto.commit': false
}, {});


const ConsumerConnection = async (topic, handler, client) => {
    await consumer.connect();
    await consumer.on('ready',
           await function () {
                console.log(`${topic} Consumer ready.`)
                consumer.subscribe([topic])
                consumer.consume()
            }).on('data', (data) => {
            const message =  JSON.parse(data.value);
            console.log(message) // deserialize the message
            handler(message, client);
    });
}

//TODO: Investigar por que solo se ejecuta el ultimo consumer Seguramente hay que crear una nueva instancia
// de consumer por cada topic que se quiera consumir




module.exports = { ConsumerConnection }
