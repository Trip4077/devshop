
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          "id": 1,
          "title": "Awesome Andriod App",
          "budget": "$3,000.00",
          "deadline": "11/11/2019",
          "type": "Andriod",
          "description": "It some things for users"  
        },
        {
          "id": 2,
          "title": "Awesome Web App",
          "budget": "$5,000.00",
          "deadline": "11/11/2021",
          "type": "Web",
          "description": "It some things for users too"  
        },
        {
          "id": 3,
          "title": "Awesome iOS App",
          "budget": "$3,000.00",
          "deadline": "11/11/2019",
          "type": "iOS",
          "description": "It some things for users"  
        },
        {
          "id": 4,
          "title": "Awesome Mobile App",
          "budget": "$5,000.00",
          "deadline": "11/11/2021",
          "type": "Mobile",
          "description": "It some things for users too"  
        },
        {
          "id": 5,
          "title": "Awesome Andriod App",
          "budget": "$3,000.00",
          "deadline": "11/11/2019",
          "type": "Andriod",
          "description": "It some things for users"  
        },
        {
          "id": 6,
          "title": "Awesome Web App",
          "budget": "$5,000.00",
          "deadline": "11/11/2021",
          "type": "Web",
          "description": "It some things for users too"  
        },
      ]);
    });
};
