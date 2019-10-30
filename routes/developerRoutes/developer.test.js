const request = require('supertest');

const server = require('../../server/server');
const db = require('../../data/dbConfig');

describe('DEVELOPER ROUTES', () => {

    // beforeEach(async () => {
    //     return await db('developers').truncate();
    // });

    describe('GET /devs', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/api/devs');

            expect(res.status).toBe(200);
        });

        it('should return a JSON packet', async () => {
            const res = await request(server).get('/api/devs');

            expect(res.type).toBe('application/json');
        });

        it('should return all schools in the database', async () => {
            const res = await request(server).get('/api/devs');

            expect(res.body.length).toBe(5);
        });
    });

    describe('GET /devs/:id', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/api/devs/1');

            expect(res.status).toBe(200);
        });

        it('should return a single object', async () => {
            const res = await request(server).get('/api/devs/5');

            expect(res.body).toEqual({
                                        id: 5,
                                        email: "dev5@gmail.com",
                                        first_name: "Jack",
                                        last_name: "Boberts",
                                        password: "password",
                                        phone: "555-555-5555",
                                        title: "Full Stack Developer",
                                        location: "US",
                                        tech_stack: "html,css,js,react,redux,node,express,sql,jest",
                                        interest: "climbing,hiking,rafting",
                                        rate: 15,
                                        available: 0
                                    });
        });

        it('should return status 404 if no developer found', async () =>{
            const res = await request(server).get('/api/devs/10');

            expect(res.status).toBe(400);
        })

        it('should return an error message if no developer found', async () =>{
            const res = await request(server).get('/api/devs/10');
          
            expect(res.body.err).toBe('Invalid ID');
        })
    });

    describe('PUT /devs/:id', () => {
        it('should return status 200 if successful', async () => {
            const res = await request(server)
                              .put('/api/devs/1')
                              .send({ first_name: "Bob" });

            expect(res.status).toBe(200);
        });

        it('should update based on sent changes', async () => {
            const res = await request(server)
                              .put('/api/devs/1')
                              .send({ first_name: "Tristan" });

            expect(res.body.first_name).toBe("Tristan");
        });

        it('should return status 400 if missing body', async () => {
            const res = await request(server)
                              .put('/api/devs/1')
                              .send(undefined);

            expect(res.status).toBe(400);
        });

        it('should return status 400 if missing id', async () => {
            const res = await request(server)
                              .put('/api/devs/undefined')
                              .send({ first_name: "Tristan" });

            expect(res.status).toBe(400);
        });

        it('should return status 400 if id invalid', async () => {
            const res = await request(server)
                              .put('/api/devs/25')
                              .send({ first_name: "Tristan" });

            expect(res.status).toBe(400);
        });

        it('should return Invalid ID message if ID doesnt match', async () => {
            const res = await request(server)
                              .put('/api/devs/25')
                              .send({ first_name: "Tristan" });

            expect(res.body.err).toBe("Invalid ID");
        });

        it('should return Missing ID or Update Value message if missing ID or body', async () => {
            const res = await request(server)
                              .put('/api/devs/10')
                              .send(undefined);

            expect(res.body.err).toBe("Missing ID or Update Value");
        });
    });

    describe('DELETE /devs/:id', () => {
        it('should return status 200 if successful', async () => {
            const res = await request(server)
                              .delete('/api/devs/3')

            expect(res.status).toBe(200);
        });

        it('should return status 400 if missing id', async () => {
            const res = await request(server)
                              .delete('/api/devs/undefined');

            expect(res.status).toBe(400);
        });

        it('should return status 400 if id invalid', async () => {
            const res = await request(server)
                              .delete('/api/devs/25');

            expect(res.status).toBe(400);
        });
    });
});
