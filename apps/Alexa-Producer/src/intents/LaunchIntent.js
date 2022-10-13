const LaunchRequest = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      const speechText = 'Te doy la bienvenida, puedes pasarme un comando cuando quieras.';
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
  
    },
  };
  
  module.exports = { LaunchRequest }