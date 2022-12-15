// Wrapper to export data access level APIs according to current mode (production or development)
if (process.env.NODE_ENV === 'production') {
  module.exports = require('dal/DALproduction');
} else {
  module.exports = require('dal/DALdevelopment');
}
