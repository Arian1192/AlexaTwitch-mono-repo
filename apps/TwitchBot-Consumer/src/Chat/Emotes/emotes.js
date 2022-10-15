const {NewConsumerConnection} = require('../../../utils/NewConsumerConnection')
const { ChannelEmoteHandler } = require('./ChannelEmoteHandler')

module.exports = function (client){
    NewConsumerConnection('emotes',ChannelEmoteHandler,client);
}
