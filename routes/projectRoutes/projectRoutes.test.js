const request = require('supertest');
const server = require('../../server/server');

describe('PROJECT ROUTES', () => {

    describe('GET /projects', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/api/projects');

            expect(res.status).toBe(200)
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
            const res = await request(server).get('/api/projects');

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
                type: "Andriod",
                description: "It some things for users"
            });
        });

        it('should return status 400 if no project found', async () => {
            const res = await request(server).get('/api/projects/25');

            expect(res.status).toBe(400);
        });

        it('should return an error message if no project found', async () => {
            const res = await request(server).get('/api/projects/10');

            expect(res.status).toBe(400);
        });
    });

    describe('PUT /projects/:id', () => {
        it('should return a status 200 if successful', async () => {
            const res = await request(server)
                              .put('/api/projects/1')
                              .send({ type: "Web" });

            expect(res.status).toBe(200);
        });

        it('should update based on sent changes', async () => {
            const res = await request(server)
                              .put('/api/projects/1')
                              .send({ type: "Android" });

            expect(res.body.type).toBe('Android');
        });

        it('should return status 400 if missing body', async () => {
            const res = await request(server)
                              .put('/api/projects/1')
                              .send(undefined);

            expect(res.status).toBe(400);
        });

        it('should return status 400 if missing id', async () => {
            const res = await request(server)
                              .put('/api/projects/undefined')
                              .send({ type: "Web" });

            expect(res.status).toBe(400);
        });

        it('should return Invalid ID message if ID doesnt match', async () => {
            const res = await request(server)
                              .put('/api/projects/25')
                              .send({ type: "Android" });

            expect(res.body.err).toBe("Invalid ID");
        });

        it('should return Missing ID or Update Value message if missing ID or body', async () => {
            const res = await request(server)
                              .put('/api/projects/30')
                              .send(undefined);

            expect(res.body.err).toBe("Missing ID or Update Value");
        });
    });

    describe('DELETE /projects/:id', () => {
        it('should return status 200 if successful', async () => {
            const res = await request(server)
                              .delete('/api/projects/1')

            expect(res.status).toBe(200);
        });

        it('should return status 400 if missing id', async () => {
            const res = await request(server)
                              .delete('/api/projects/undefined');

            expect(res.status).toBe(400);
        });

        it('should return status 400 if id invalid', async () => {
            const res = await request(server)
                              .delete('/api/projects/25');

            expect(res.status).toBe(400);
        });
    });
});