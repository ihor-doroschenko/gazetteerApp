if (process.env.NODE_ENV === 'production') {
  module.exports = require('dal/DALproduction');
} else {
  module.exports = require('dal/DALdevelopment');
}
