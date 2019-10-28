
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {
          id: 1, 
          client_id: 1,
          project_id: 1,
          frontend_id: 1,
          backend_id: 3,
          ui_id: 2,
          devops_id: 5
        },
        {
          id: 2, 
          client_id: 2,
          project_id: 2,
          frontend_id: 2,
          backend_id: 4,
          ui_id: 1,
          devops_id: 5
        },
        {
          id: 3, 
          client_id: 3,
          project_id: 3,
          frontend_id: 1,
          backend_id: 4,
          ui_id: 1,
          devops_id: 5
        },
        {
          id: 4, 
          client_id: 4,
          project_id: 4,
          frontend_id: 5,
          backend_id: 5,
          ui_id: 5,
          devops_id: 5
        },
      ]);
    });
};
