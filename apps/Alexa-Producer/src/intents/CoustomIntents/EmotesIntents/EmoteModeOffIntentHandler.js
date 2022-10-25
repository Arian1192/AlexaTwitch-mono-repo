const { messageProducer } = require('../../../../utils/messageProducer')
const EmoteModeOffIntentHandler = {
    canHandle(handlerInput)
    {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'EmoteModeOffIntent';
    },
    handle(handlerInput)
    {
        messageProducer('emotes', 'emotes', 'emoteonlyoff')
        const speechText = 'Anfis por favor, desactiva el modo emotes.';
        return (
            handlerInput.responseBuilder
                .speak(speechText)
                .reprompt('Hello world', speechText)
                .getResponse()
        );
    }
}

module.exports = { EmoteModeOffIntentHandler };