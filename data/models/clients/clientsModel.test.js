const db = require('../../dbConfig');
const Clients = require('./clientsModel');

const mockClients = [
    {
        "email": "client@gmail.com",
        "first_name": "Bob",
        "last_name": "Boberts",
        "password": "password",
        "phone": "555-555-5555",
        "company": "Google"  
    },
    {
        "email": "client2@gmail.com",
        "first_name": "Rob",
        "last_name": "Roberts",
        "password": "password",
        "phone": "555-555-5555",
        "company": "Netflix"  
    },
] 

describe('CLIENTS MODEL', () => {

    describe('getAllClients()', () => {

        beforeEach(async () => {
            return await db('clients').truncate();
        });

        it('should return an array', async () => {
            const clients = await Clients.getAllClients();

            expect(Array.isArray(clients)).toBe(true);
        });

        it('should return an array of all clients', async () => {
            await db('clients').insert(mockClients[0]);
            await db('clients').insert(mockClients[1]);

            const clients = await Clients.getAllClients();

            expect(clients.length).toBe(2);
        });
    });

    describe('getClient', () => {

        beforeEach(async () => {
            return await db('clients').truncate();
        });

        it('should return an array', async () => {
            const client = await Clients.getClient(1);

            expect(Array.isArray(client)).toBe(true);
        });

        it('should return a single client', async () => {
            await db('clients').insert(mockClients[0]);
            await db('clients').insert(mockClients[1]);

            const client = await Clients.getClient(2);

            expect(client.length).toBe(1);
        });

        it('should return the client that corresponds with passed ID', async () => {
            await db('clients').insert(mockClients[0]);
            await db('clients').insert(mockClients[1]);
            
            const client = await Clients.getClient(2);

            expect(client[0].id).toBe(2);
            expect(client[0].first_name).toBe("Rob");
        });
    });
    
    describe('addClient()', () => {
        beforeEach(async () => {
            return await db('clients').truncate();
        });

        it('should add a client to the database', async () => {
            const added = await Clients.addClient(mockClients[0]);

            const newClient = { 
                ...mockClients[0], 
                id: 1
            }            

            expect(added[0]).toEqual(newClient);
        });

        it('should return the added developer', async () => {
            const added = await Clients.addClient(mockClients[0]);      

            expect(added[0].id).toBe(1);
            expect(added[0].first_name).toBe("Bob");
        });
    });

    describe('editClient', () => {
        beforeEach(async () => {
            return await db('clients').truncate();
        });

        it('should update the changed client fields', async () => {
            const [ id ] = await db('clients').insert(mockClients[0]);
            const update = { ...mockClients[0], company: "facebook" }

            const changedInfo = await Clients.editClient(id, update);

            expect(changedInfo[0].company).toBe("facebook");
        });

        it('should return the updated developer', async () => {
            const [ id ] = await db('clients').insert(mockClients[0]);
            const update = { ...mockClients[0], company: "facebook" }

            const changedInfo = await Clients.editClient(id, update);

            expect(changedInfo[0].id).toBe(1);
        });
    });

    describe('deleteClient()', () => {
        beforeEach(async () => {
            return await db('clients').truncate();
        });

        it('should remove a clients from the database', async () => {
            await db('clients').insert(mockClients[0]);
            await db('clients').insert(mockClients[1]);

            await Clients.deleteClient(1);

            const results = await db('clients');

            expect(results.length).toBe(1);
        });

        it('should remove the clients that corresponds with passed ID', async () => {
            await db('clients').insert(mockClients[0]);
            await db('clients').insert(mockClients[1]);

            await Clients.deleteClient(1);

            const results = await db('clients');
            const success = await db('clients').where({ id: 1 });

            expect(results[0].id).toBe(2);
            expect(success.length).toBe(0);
        });
    });
});