const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
})

const messageProducer = async (groupId ,topic , messageToConsumer) => {
    const producer = kafka.producer({groupId: groupId})
    await producer.connect()
    await producer.send({
        topic: topic,
        messages: [
            {value: messageToConsumer}
        ],
    })
    await producer.disconnect()
}
module.exports = { messageProducer }