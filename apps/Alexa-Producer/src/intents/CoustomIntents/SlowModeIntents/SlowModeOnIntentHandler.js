const Kafka = require('node-rdkafka');
const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'}, {}, { 'topic': 'slowmode' });

const SlowModeOnIntentHandler = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'SlowModeOnIntent';
    },
    handle(handlerInput) {
        const speechText = 'Anfis por favor, activa el slow mode.';
        const success = stream.write(Buffer.from(JSON.stringify('slow')));
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
        );
    }
}

module.exports = { SlowModeOnIntentHandler };
