const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
})

const producer = kafka.producer({groupId: 'emotes'})

const EmoteModeOnIntentHandler = {
    canHandle(handlerInput)
    {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'EmoteModeOnIntent';
    },
    async handle(handlerInput)
    {
        await producer.connect()
        await producer.send({
            topic: 'emotes',
            messages: [
                { value: 'emoteonly' },
            ],
        })
        await producer.disconnect()
        const speechText = 'Anfis por favor, activa el modo emotes.';
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
        );
    }
}

module.exports = { EmoteModeOnIntentHandler };
