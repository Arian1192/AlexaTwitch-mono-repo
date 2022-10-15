const { NewConsumerConnection } = require('../../../utils/NewConsumerConnection');
const { ChannelSlowModeHandler } = require('./ChannelSlowModeHandler')

module.exports = function (client){
    NewConsumerConnection('slowmode', ChannelSlowModeHandler, client)
}
