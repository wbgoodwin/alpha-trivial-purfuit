exports.up = function(knex) {
  return knex.schema.createTable('questions', function(table) {
    table.increments('id').unsigned().primary();
    table.string('question').notNullable();
    table.string('correct_answer').notNullable();
    table.string('incorrect_answer1').notNullable();
    table.string('incorrect_answer2').notNullable();
    table.string('incorrect_answer3').notNullable();
    table.integer('category_id').unsigned().references('id').inTable('categories');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions')
};
