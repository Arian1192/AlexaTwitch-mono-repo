const Alexa = require('ask-sdk-core');

const { SessionEndedRequest, HelpIntent, CancelAndStopIntentHandler, UnhandledIntent } = require('./intents/AmazonIntents/AmazonIntents');
const { EmoteModeOnIntentHandler } = require('../src/intents/CoustomIntents/EmotesIntents/EmoteModeOnIntentHandler');
const { EmoteModeOffIntentHandler } = require('./intents/CoustomIntents/EmotesIntents/EmoteModeOffIntentHandler')
const { LaunchRequest } = require('./intents/LaunchIntent');
const { SlowModeOnIntentHandler } = require('./intents/CoustomIntents/SlowModeIntents/SlowModeOnIntentHandler');
const { SlowModeOffIntentHandler } = require('./intents/CoustomIntents/SlowModeIntents/SlowModeOffIntentHandler');
const { SubsModeOnIntentHandler } = require('./intents/CoustomIntents/SubsModeIntents/SubsModeOnIntentHandler');
const { SubsModeOffIntentHandler } = require('./intents/CoustomIntents/SubsModeIntents/SubsModeOffIntentHandler');

const createSkill = () => {
    const skillbuilder = Alexa.SkillBuilders.custom();
    return skillbuilder.addRequestHandlers(
        LaunchRequest,
        EmoteModeOnIntentHandler,
        EmoteModeOffIntentHandler,
        SlowModeOnIntentHandler,
        SlowModeOffIntentHandler,
        SubsModeOnIntentHandler,
        SubsModeOffIntentHandler,
        SessionEndedRequest,
        HelpIntent,
        CancelAndStopIntentHandler,
        UnhandledIntent
    )
        .withApiClient(new Alexa.DefaultApiClient())
        .withCustomUserAgent('prueba/v1')
        .create()
}

module.exports = { createSkill }