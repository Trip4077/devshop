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
    await db('clients').insert(newClient);

    const clients = await db('clients');
    
    return clients[clients.length-1]
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
