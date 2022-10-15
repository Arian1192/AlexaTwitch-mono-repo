const { NewConsumerConnection } = require('../../../utils/NewConsumerConnection');
const { ChannelFollowersHandler } = require('./ChannelFollowersHandler');

module.exports  = function (client){
    NewConsumerConnection('followers', ChannelFollowersHandler, client)
}