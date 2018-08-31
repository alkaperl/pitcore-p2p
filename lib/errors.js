'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on pitcore-p2p Module {0}'
};

module.exports = require('pitcore-lib').errors.extend(spec);
