const Kafka = require('node-rdkafka');

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'},{},{'topic': 'emotes'});

const EmoteModeOnIntentHandler = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'EmoteModeOnIntent';
    },
    handle(handlerInput) {
        const speechText = 'Anfis va a poner el chat en modo emotes.';
        const success = stream.write(Buffer.from(JSON.stringify('emoteonly')));
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello world', speechText).getResponse()
            );
    }
}


module.exports = { EmoteModeOnIntentHandler };