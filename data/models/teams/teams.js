const db = require('../../dbConfig');

const getAllTeams = () => {
    return db('teams')
            .join('clients', 'teams.client_id', '=', 'clients.id')
            .join('projects', 'teams.project_id', '=', 'projects.id')
            .join('developers as frontend', 'teams.frontend_id', '=', 'frontend.id')
            .join('developers as backend', 'teams.backend_id', '=', 'backend.id')
            .join('developers as ui', 'teams.ui_id', '=', 'ui.id')
            .join('developers as devops', 'teams.devops_id', '=', 'devops.id')
            .select('teams.id', 
                    'clients.first_name as client_first', 
                    'clients.last_name as client_last',
                    'projects.title as project_title',
                    'frontend.first_name as frontend',
                    'backend.first_name as backend',
                    'ui.first_name as ui',
                    'devops.first_name as devops'
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
            .select('teams.id', 
                    'clients.first_name as client_first', 
                    'clients.last_name as client_last',
                    'projects.title as project_title',
                    'frontend.first_name as frontend',
                    'backend.first_name as backend',
                    'ui.first_name as ui',
                    'devops.first_name as devops')
            .where('teams.id', id);
}

module.exports = {
    getAllTeams,
    getTeam
}