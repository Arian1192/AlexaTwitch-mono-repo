const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'AlexaTwitch',
    brokers: ['localhost:9092']
});

const producer = kafka.producer({groupId: 'followersmode'});

const FollowersModeOffIntent = {
    canHandle(handlerInput)
    {
        const {request} = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'FollowersModeOffIntent';

    },
    async handle(handlerInput)
    {
        await producer.connect();
        await producer.send({
            topic: 'followersmode',
            messages: [
                { value: 'followersonlyoff' },
            ],
        })
        await producer.disconnect();
        const speechText = 'Anfis por favor, desactiva el modo de seguidores.';
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello World').getResponse()
        );
    }
}

module.exports = { FollowersModeOffIntent };
