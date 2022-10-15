const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
});

const producer = kafka.producer({groupId: 'followersmode'});

const FollowersModeOnIntent = {
    canHandle(handlerInput)
    {
        const {request} = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'FollowersModeOnIntent';
    },
    async handle(handlerInput)
    {
        await producer.connect();
        await producer.send({
            topic: 'followers',
            messages: [
                { value: 'followersonly' },
            ],
        })
        await producer.disconnect();
        const speechText = 'Anfis por favor, activa el modo de seguidores.';
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello World').getResponse()
        );
    }
}

module.exports = { FollowersModeOnIntent };
