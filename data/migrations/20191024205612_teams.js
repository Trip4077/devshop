
exports.up = function(knex) {
    return knex.schema.createTable('teams', tbl => {
        //ID
        tbl.increments();

        tbl.integer('client_id').notNullable();
        tbl.integer('project_id').notNullable();

        tbl.integer('frontend_id').notNullable();
        tbl.integer('backend_id').notNullable();
        tbl.integer('ui_id').notNullable();
        tbl.integer('devops_id').notNullable();

        tbl.foreign('client_id').references('clients.id');
        tbl.foreign('project_id').references('projects.id');

        tbl.foreign('frontend_id').references('developers.id');
        tbl.foreign('backend_id').references('developers.id');
        tbl.foreign('ui_id').references('developers.id');
        tbl.foreign('devops_id').references('developers.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('teams');
};
