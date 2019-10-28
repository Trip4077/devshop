const db = require('../../dbConfig');

const getAllDevs = () => {
    return db('developers');
}

const getDev = id => {
    return db('developers').where({ id });
}

const addDev = async newDev => {
    const [ id ] = await db('developers').insert(newDev);

    return db('developers').where({ id });
}

const editDev = async (id, update) => {
    await db('developers').where({ id }).update(update);

    return db('developers').where({ id })
}

const deleteDev = async id => {
    return db('developers').where({ id }).del();
}

module.exports = {
    getAllDevs,
    getDev,
    addDev,
    editDev,
    deleteDev
}