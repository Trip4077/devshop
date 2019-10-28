const db = require('../../dbConfig');
const Clients = require('./clientsModel');

describe('CLIENTS MODEL', () => {

    describe('getAllClients()', () => {

        beforeEach(async () => {
            return await db('clients').truncate();
        });

        it('should return an array', async () => {
            const clients = await Clients.getAllClients();

            expect(Array.isArray(clients)).toBe(true);
        });
    });

});