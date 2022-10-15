const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
})

const producer = kafka.producer({groupId: 'subsmode'})

const SubsModeOnIntentHandler = {
    canHandle(handlerInput) {
        const {request} = handlerInput.requestEnvelope
        return request.type === 'IntentRequest' && request.intent.name === 'SubsModeOnIntent'
    },
    async handle(handlerInput)
    {
        await producer.connect()
        await producer.send({
            topic: 'subsmode',
            messages: [
                {value: 'subsonly'},
            ],
        })
        await producer.disconnect()
        const speechText = 'Anfis por favor, activa el modo de suscriptores.'
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello World').getResponse()
        );
    }
}

module.exports = { SubsModeOnIntentHandler }