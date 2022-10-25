const { messageProducer } = require("../../../../utils/messageProducer");
const FollowersModeOnIntent = {
    canHandle(handlerInput)
    {
        const {request} = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'FollowersModeOnIntent';
    },
    handle(handlerInput)
    {
        messageProducer('followersmode', 'followers', 'followersonly');
        const speechText = 'Anfis por favor, activa el modo de seguidores.';
        return (
            handlerInput.responseBuilder.speak(speechText).reprompt('Hello World').getResponse()
        );
    }
}

module.exports = { FollowersModeOnIntent };
