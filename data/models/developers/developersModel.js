const db = require('../../dbConfig');

const getAllDevs = () => {
    return db('developers');
}

const getDev = id => {
    return db('developers').where({ id });
}

const getDevByEmail = email => {
    return db('developers').where({ email });
}

const addDev = async newDev => {
    const id = await db('developers').insert(newDev);
    console.log(id)
    return db('developers').where({ id });
}

const editDev = async (id, update) => {
    await db('developers').where({ id }).update(update);

    return db('developers').where({ id })
}

const deleteDev = id => {
    return db('developers').where({ id }).del();
}

module.exports = {
    getAllDevs,
    getDev,
    getDevByEmail,
    addDev,
    editDev,
    deleteDev
}
