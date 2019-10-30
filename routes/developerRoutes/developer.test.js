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
});
