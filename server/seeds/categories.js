exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'People', color: '#F44336'},
        {id: 2, name: 'Events', color: '#FFFFFF'},
        {id: 3, name: 'Places', color: '#2196F3'},
        {id: 4, name: 'Independence Day Holiday', color: '#4CAF50'}
      ]);
    });
};
