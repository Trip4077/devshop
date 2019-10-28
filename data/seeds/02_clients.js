
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {
          "id": 1,
          "email": "client@gmail.com",
          "first_name": "Bob",
          "last_name": "Boberts",
          "password": "password",
          "phone": "555-555-5555",
          "company": "Google"  
        },
        {
          "id": 2,
          "email": "client2@gmail.com",
          "first_name": "Rob",
          "last_name": "Roberts",
          "password": "password",
          "phone": "555-555-5555",
          "company": "Netflix"  
        },
        {
          "id": 3,
          "email": "client3@gmail.com",
          "first_name": "Bob",
          "last_name": "Boberts",
          "password": "password",
          "phone": "555-555-5555",
          "company": "Facebook"  
        },
        {
          "id": 4,
          "email": "client4@gmail.com",
          "first_name": "Rob",
          "last_name": "Roberts",
          "password": "password",
          "phone": "555-555-5555",
          "company": "Twitter"  
        },
        {
          "id": 5,
          "email": "client5@gmail.com",
          "first_name": "Rob",
          "last_name": "Roberts",
          "password": "password",
          "phone": "555-555-5555",
          "company": "Twitter"  
        }
      ]);
    });
};
