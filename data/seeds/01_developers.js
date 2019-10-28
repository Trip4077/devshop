
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('developers').del()
    .then(function () {
      // Inserts seed entries
      return knex('developers').insert([
        {
          "id": 1,
          "email": "dev@gmail.com",
          "first_name": "Bob",
          "last_name": "Boberts",
          "password": "password",
          "phone": "555-555-5555",
          "title": "Front End Developer",
          "location": "US",
          "tech_stack": "html,css,js,react,redux",
          "interest": "climbing,hiking,rafting",
           "rate": "25.0",
           "available": true    
        },
        {
          "id": 2,
          "email": "dev2@gmail.com",
          "first_name": "Mike",
          "last_name": "Boberts",
          "password": "password",
          "phone": "555-555-5555",
          "title": "Front End Developer",
          "location": "US",
          "tech_stack": "html,css,js,react,redux",
          "interest": "climbing,hiking,rafting",
           "rate": "45.0",
           "available": true    
        },
        {
          "id": 3,
          "email": "dev3@gmail.com",
          "first_name": "Tristan",
          "last_name": "Boberts",
          "password": "password",
          "phone": "555-555-5555",
          "title": "Back End Developer",
          "location": "US",
          "tech_stack": "js,node,express,sql,jest",
          "interest": "climbing,hiking,rafting",
           "rate": "35.0",
           "available": true    
        },
        {
          "id": 4,
          "email": "dev4@gmail.com",
          "first_name": "Al",
          "last_name": "Boberts",
          "password": "password",
          "phone": "555-555-5555",
          "title": "Back End Developer",
          "location": "US",
          "tech_stack": "js,node,express,sql,jest",
          "interest": "climbing,hiking,rafting",
           "rate": "25.0",
           "available": false    
        },
        {
          "id": 5,
          "email": "dev5@gmail.com",
          "first_name": "Jack",
          "last_name": "Boberts",
          "password": "password",
          "phone": "555-555-5555",
          "title": "Full Stack Developer",
          "location": "US",
          "tech_stack": "html,css,js,react,redux,node,express,sql,jest",
          "interest": "climbing,hiking,rafting",
           "rate": "15.0",
           "available": false    
        },
      ]);
    });
};
