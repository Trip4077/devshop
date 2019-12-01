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
    await db('developers').insert(newDev);

    const devs = await db('developers');
    
    return devs[devs.length-1]
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
