// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stickers'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-stickers'
  }


};
