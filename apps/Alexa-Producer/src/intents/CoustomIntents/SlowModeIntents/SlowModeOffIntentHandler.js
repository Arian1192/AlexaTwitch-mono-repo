const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
})

const producer = kafka.producer({groupId: 'slowmode'})

const SlowModeOffIntentHandler = {
    canHandle(handlerInput)
    {
        const { request } = handlerInput.requestEnvelope
        return request.type === 'IntentRequest' && request.intent.name === 'SlowOffModeIntent'
    },
    async handle(handlerInput)
    {
        await producer.connect()
        await producer.send({
            topic: 'slowmode',
            messages: [
                { value: 'slowoff' }
            ],
        })
        await producer.disconnect()
        const speechText = 'Anfis por favor, desactiva el modo lento'
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello World').getResponse()
        );
    }
}

module.exports = { SlowModeOffIntentHandler }