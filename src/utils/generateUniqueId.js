const crypto = require('crypto');

module.exports = function generateUniqueId() {
  crypto.randomBytes
  return crypto.randomBytes(4).toString('HEX');
}