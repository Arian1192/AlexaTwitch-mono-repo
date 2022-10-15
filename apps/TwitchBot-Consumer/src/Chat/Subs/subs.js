const { NewConsumerConnection } = require('../../../utils/NewConsumerConnection');
const { ChannelSubsModeHandler } = require('./ChannelSubsmodeHandler');

module.exports = function (client) {
    NewConsumerConnection('subsmode', ChannelSubsModeHandler, client);
}
