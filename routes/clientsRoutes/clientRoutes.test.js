const request = require('supertest');
const server = require('../../server/server');

describe("CLIENT ROUTES", () => {

    describe("GET /clients", () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/api/clients');

            expect(res.status).toBe(200);
        });

        it('should return a JSON packet', async () => {
            const res = await request(server).get('/api/clients');

            expect(res.type).toBe('application/json');
        });

        it('should return all clients in the database', async () => {
            const res = await request(server).get('/api/clients');

            expect(res.body.length).toBe(5);
        });
    });
});