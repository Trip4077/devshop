
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        //ID
        tbl.increments();

        //Strings
        tbl.string('title').notNullable();
        tbl.string('budget').notNullable();
        tbl.string('deadline').notNullable();
        tbl.string('type').notNullable();

        tbl.string('description');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
