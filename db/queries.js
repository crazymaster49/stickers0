const knex = require('./knex.js')

module.exports = {
  getAll() {
  return knex('sticker');
  }
}
