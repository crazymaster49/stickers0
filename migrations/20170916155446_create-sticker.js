
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sticker',function(table){
    table.increments();
    table.text('Title');
    table.text('Description');
    table.float('Rating');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sticker')
};
