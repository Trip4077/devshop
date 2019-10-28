const db = require('../../dbConfig');

const getAllProjects = () => {
    console.log('getAllProjects');
}

const getProject = id => {
    console.log('getProject');
}

const addProject = project => {
    console.log('addProject');
}

const editProject = (id, update) => {
    console.log('editProject');
}

const deleteProject = id => {
    console.log('deleteProject');
}

module.exports = {
    getAllProjects,
    getProject,
    addProject,
    editProject,
    deleteProject
}