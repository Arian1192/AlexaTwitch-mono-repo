const Kafka = require('node-rdkafka');

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'}, {}, { 'topic': 'slowmode' });

const SlowModeOffIntentHandler = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'SlowOffModeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Anfis por favor, desactiva el slow mode.';
        const success = stream.write(Buffer.from(JSON.stringify('slowoff')));
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
        );
    }
}

module.exports = { SlowModeOffIntentHandler };
