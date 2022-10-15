const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
})


const NewConsumerConnection = async (topic, handler, client) => {
    const consumer = kafka.consumer({ groupId: topic})
    console.log(`Connecting to ${topic} topic`)
    await consumer.connect()
    await consumer.subscribe({ topic: topic, fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const data = message.value
            const dataParsed = data.toString()
            handler(dataParsed, client)
        }
    })
}
module.exports = { NewConsumerConnection }