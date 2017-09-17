cost knex = require('../db/knex.js');

describe('CRUD Stickers', () => {
  before(( => {
    // run migration
    knex migrate:latest();
    // run seeds
  }))
  });
