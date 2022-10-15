const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
})

const producer = kafka.producer({groupId: 'slowmode'})

const SlowModeOnIntentHandler = {
    canHandle(handlerInput)
    {
        const {request} = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'SlowModeOnIntent';
    },
    async handle(handlerInput)
    {
        await producer.connect()
        await producer.send({
            topic: 'slowmode',
            messages: [
                {value: 'slow'},
            ],
        })
        await producer.disconnect()
        const speechText = 'Anfis por favor, activa el modo lento.';
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
        );
    }
}

module.exports = { SlowModeOnIntentHandler }