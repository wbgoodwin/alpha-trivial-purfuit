exports.up = function(knex) {
  return knex.schema.createTable('categories', function(table) {
    table.increments('id').unsigned().primary();
    table.string('name').notNullable();
    table.string('color').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories')
};
