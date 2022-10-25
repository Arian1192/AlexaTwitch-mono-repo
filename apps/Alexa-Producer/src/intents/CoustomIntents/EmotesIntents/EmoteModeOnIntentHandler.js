const { messageProducer } = require('../../../../utils/messageProducer')
const EmoteModeOnIntentHandler = {
     canHandle(handlerInput)
     {
          const {request} = handlerInput.requestEnvelope;
          return request.type === 'IntentRequest' && request.intent.name === 'EmoteModeOnIntent';
     },
     handle(handlerInput)
     {
          messageProducer('emotes', 'emotes', 'emoteonly')
          const speechText = 'Anfis por favor, activa el modo emotes.';
          return (
              handlerInput.responseBuilder
                  .speak(speechText)
                  .reprompt('Hello world', speechText)
                  .getResponse()
          );
     }
}

module.exports = { EmoteModeOnIntentHandler };
