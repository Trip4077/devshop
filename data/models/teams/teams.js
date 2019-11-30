const db = require('../../dbConfig');

const getAllTeams = () => {
    return db('teams')
            .join('clients', 'teams.client_id', '=', 'clients.id')
            .join('projects', 'teams.project_id', '=', 'projects.id')
            .join('developers as frontend', 'teams.frontend_id', '=', 'frontend.id')
            .join('developers as backend', 'teams.backend_id', '=', 'backend.id')
            .join('developers as ui', 'teams.ui_id', '=', 'ui.id')
            .join('developers as devops', 'teams.devops_id', '=', 'devops.id')
            .select(
                'teams.id', 
                'clients.first_name as client_first', 
                'clients.last_name as client_last',
                'clients.id as c_id',
                'projects.title as project_title',
                'projects.id as p_id',
                'frontend.first_name as frontend',
                'frontend.id as f_id',
                'backend.first_name as backend',
                'backend.id as b_id',
                'ui.first_name as ui',
                'ui.id as u_id',
                'devops.first_name as devops',
                'devops.id as d_id',
            );
}

const getTeam = id => {
    return db('teams')
            .join('clients', 'teams.client_id', '=', 'clients.id')
            .join('projects', 'teams.project_id', '=', 'projects.id')
            .join('developers as frontend', 'teams.frontend_id', '=', 'frontend.id')
            .join('developers as backend', 'teams.backend_id', '=', 'backend.id')
            .join('developers as ui', 'teams.ui_id', '=', 'ui.id')
            .join('developers as devops', 'teams.devops_id', '=', 'devops.id')
            .select(
                'teams.id', 
                'clients.first_name as client_first', 
                'clients.last_name as client_last',
                'clients.id as c_id',
                'projects.title as project_title',
                'projects.id as p_id',
                'frontend.first_name as frontend',
                'frontend.id as f_id',
                'backend.first_name as backend',
                'backend.id as b_id',
                'ui.first_name as ui',
                'ui.id as u_id',
                'devops.first_name as devops',
                'devops.id as d_id',
            )
            .where('teams.id', id);
}

const addTeam = async team => {
    const [ id ] = await db('teams').insert(team);

    return await getTeam(id);
}

const editTeam = async (id, update) => {
    await db('teams').where({ id }).update(update);

    return db('teams').where({ id });
}

const deleteTeam = async id => {
    return db('teams').where({ id }).del();
}

module.exports = {
    getAllTeams,
    getTeam,
    addTeam,
    editTeam,
    deleteTeam
}