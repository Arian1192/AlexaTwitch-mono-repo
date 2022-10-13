const Kafka = require('node-rdkafka');

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, { 'topic': 'emotes' });

const EmoteModeOffIntentHandler = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'EmoteModeOffIntent';
    },
    handle(handlerInput) {
        const speechText = 'Anfis por favor, quita el modo emotes.';
        const success = stream.write(Buffer.from(JSON.stringify('emoteonlyoff')));
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
        );
    }

}

module.exports = { EmoteModeOffIntentHandler };