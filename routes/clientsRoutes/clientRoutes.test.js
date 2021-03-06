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

    describe('GET /clients/:id', () => {

        it('should return status 200 if successful', async () => {
            const res = await request(server).get('/api/clients/1');

            expect(res.status).toBe(200);
        });

        it('should return a single object', async () => {
            const res = await request(server).get('/api/clients/5');

            expect(res.body).toEqual({
                                        id: 5,
                                        email: "client5@gmail.com",
                                        first_name: "Rob",
                                        last_name: "Roberts",
                                        password: "password",
                                        phone: "555-555-5555",
                                        company: "Twitter",
                                    });
        });

        it('should return status 404 if no client found', async () =>{
            const res = await request(server).get('/api/clients/10');

            expect(res.status).toBe(400);
        })

        it('should return an error message if no client found', async () =>{
            const res = await request(server).get('/api/clients/10');
          
            expect(res.body.err).toBe('Invalid ID');
        })
    });

    describe('PUT /clients/:id', () => {
        it('should return status 200 if successful', async () => {
            const res = await request(server)
                              .put('/api/clients/1')
                              .send({ first_name: "Bob" });

            expect(res.status).toBe(200);
        });

        it('should update based on sent changes', async () => {
            const res = await request(server)
                              .put('/api/clients/1')
                              .send({ first_name: "Tristan" });

            expect(res.body.first_name).toBe("Tristan");
        });

        it('should return status 400 if missing body', async () => {
            const res = await request(server)
                              .put('/api/clients/1')
                              .send(undefined);

            expect(res.status).toBe(400);
        });

        it('should return status 400 if missing id', async () => {
            const res = await request(server)
                              .put('/api/clients/undefined')
                              .send({ first_name: "Tristan" });

            expect(res.status).toBe(400);
        });

        it('should return status 400 if id invalid', async () => {
            const res = await request(server)
                              .put('/api/clients/25')
                              .send({ first_name: "Tristan" });

            expect(res.status).toBe(400);
        });

        it('should return Invalid ID message if ID doesnt match', async () => {
            const res = await request(server)
                              .put('/api/clients/25')
                              .send({ first_name: "Tristan" });

            expect(res.body.err).toBe("Invalid ID");
        });

        it('should return Missing ID or Update Value message if missing ID or body', async () => {
            const res = await request(server)
                              .put('/api/clients/10')
                              .send(undefined);

            expect(res.body.err).toBe("Missing ID or Update Value");
        });
    });

    describe('DELETE /clients/:id', () => {
        it('should return status 200 if successful', async () => {
            const res = await request(server)
                              .delete('/api/clients/3')

            expect(res.status).toBe(200);
        });

        it('should return status 400 if missing id', async () => {
            const res = await request(server)
                              .delete('/api/clients/undefined');

            expect(res.status).toBe(400);
        });

        it('should return status 400 if id invalid', async () => {
            const res = await request(server)
                              .delete('/api/clients/25');

            expect(res.status).toBe(400);
        });
    });
});