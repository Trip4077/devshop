const db = require('../../dbConfig');

const getAllClients = () => {
    return db('clients');
}

const getClient = id => {
    return db('clients').where({ id });
}

const getClientByEmail = email => {
    return db('clients').where({ email });
}

const addClient = async newClient => {
    const [ id ] = await db('clients').insert(newClient);

    return db('clients').where({ id });
}

const editClient = async (id, update) => {
    await db('clients').where({ id }).update(update);

    return db('clients').where({ id })
}

const deleteClient = id => {
    return db('clients').where({ id }).del();
}

module.exports = {
    getAllClients,
    getClient,
    getClientByEmail,
    addClient,
    editClient,
    deleteClient
}