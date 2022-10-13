const kafka = require('node-rdkafka');
const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'} , {}, { 'topic': 'subsmode' });

const SubsModeOffIntentHandler = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'SubsModeOffIntent';
    },
    handle(handlerInput) {
        const speechText = 'Anfis por favor, desactiva el modo subs.';
        const success = stream.write(Buffer.from(JSON.stringify('subsonlyoff')));
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
        );
    }
}

module.exports = { SubsModeOffIntentHandler };
