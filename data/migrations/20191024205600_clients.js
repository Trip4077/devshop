
exports.up = function(knex) {
    return knex.schema.createTable('clients', tbl => {
        //ID
        tbl.increments();

        //Strings
        tbl.string('email').notNullable().unique();

        tbl.string('first_name').notNullable();
        tbl.string('last_name').notNullable();
        tbl.string('company').notNullable();
        tbl.string('phone').notNullable();
        tbl.string('password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clients');
};
