const Kafka = require('node-rdkafka');
const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'}, {}, { 'topic': 'subsmode' });

const SubsModeOnIntentHandler = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'SubsModeOnIntent';
    },
    handle(handlerInput) {
        const speechText = 'Anfis por favor, activa el modo subs.';
        const success = stream.write(Buffer.from(JSON.stringify('subsonly')));
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
        );
    }
}

module.exports = { SubsModeOnIntentHandler };

