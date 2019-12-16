const db = require('../../dbConfig');

const getAllProjects = () => {
    return db('projects');
}

const getProject = id => {
    return db('projects').where({ id });
}

const addProject = async project => {
    await db('projects').insert(project);

    const projects = await db('projects');
    
    return projects[projects.length-1]
}

const editProject = async (id, update) => {
    await db('projects').where({ id }).update(update);

    return db('projects').where({ id });
}

const deleteProject = id => {
    return db('projects').where({ id }).del();
}

module.exports = {
    getAllProjects,
    getProject,
    addProject,
    editProject,
    deleteProject
}
