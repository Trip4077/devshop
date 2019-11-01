const request = require('supertest');
const server = require('../../server/server');

describe('PROJECT ROUTES', () => {

    describe('GET /projects', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/api/projects');

            expect(res.status).toBe(200);
        });

        it('should return a JSON packet', async () => {
            const res = await request(server).get('/api/projects');

            expect(res.type).toBe('application/json');
        });

        it('should return all the projects in the database', async () => {
            const res = await request(server).get('/api/projects');

            expect(res.body.length).toBe(6);
        });

        it('should return an array', async () => {
            const res = await request('server').get('/api/projects');

            expect(Array.isArray(res.body)).toBe(true);
        });
    });

    describe('GET /projects/:id', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/api/projects/1');

            expect(res.status).toBe(200);
        });
    
        it('should return a single object', async () => {
            const res = await request(server).get('/api/projects/1');

            expect(res.body).toEqual({
                id: 1,
                title: "Awesome Andriod App",
                budget: "$3,000.00",
                deadline: "11/11/2019",
                type: "Android",
                description: "It some things for users"
            });
        });

        it('should return status 404 if no project found', async () => {
            const res = await request(server).get('/api/projects/25');

            expect(res.status).toBe(404);
        });

        it('should return an error message if no project found', async () => {
            const res = await request(server).get('/api/projects/10');

            expect(res.status).toBe(400);
        });
    });
});