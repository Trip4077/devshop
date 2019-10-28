
exports.up = function(knex) {
  return knex.schema.createTable('developers', tbl => {
      //ID
      tbl.increments();

      //Strings
      tbl.string('email').notNullable().unique();

      tbl.string('first_name').notNullable();
      tbl.string('last_name').notNullable();
      tbl.string('password').notNullable();
      tbl.string('phone').notNullable();
      tbl.string('title').notNullable();

      tbl.string('location').defaultTo(null);

      // Strings to Arrays
      tbl.string('tech_stack').notNullable();
      tbl.string('interest').notNullable();

      // Floats
      tbl.float('rate').notNullable().defaultTo(15.50);

      //Boolean
      tbl.boolean('available').notNullable().defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('developers');
};
