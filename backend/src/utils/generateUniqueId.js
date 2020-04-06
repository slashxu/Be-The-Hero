const crypto = require('crypto');

// Gera um id randomico
module.exports = function generateUniqueId(){
  return crypto.randomBytes(4).toString('HEX');
}