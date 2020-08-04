const load = require('./helpers/load-csv')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(async function () {
      // Inserts seed entries
      let values = await load.loadCsv('questions.csv')
      return knex('questions').insert(values);
    });
};
