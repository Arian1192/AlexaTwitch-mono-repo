const { ConsumerConnection } = require('../../../utils/ConsumerConnection');
const { ChannelSubsModeHandler } = require('./ChannelSubsmodeHandler');

module.exports = function (client) {
    ConsumerConnection('subsmode', ChannelSubsModeHandler, client);
}
