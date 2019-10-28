const db = require('../dbConfig');
const Developers = require('./developersModel');

const developers = [
    {
        "email": "dev@gmail.com",
        "first_name": "Bob",
        "last_name": "Boberts",
        "password": "password",
        "phone": "555-555-5555",
        "title": "Front End Developer",
        "location": "US",
        "tech_stack": "html,css,js,react,redux",
        "interest": "climbing,hiking,rafting",
         "rate": "25.0",
         "available": true    
    },
    {
        "email": "dev2@gmail.com",
        "first_name": "Rob",
        "last_name": "Roberts",
        "password": "password",
        "phone": "555-555-5555",
        "title": "Back End Developer",
        "tech_stack": "js,node,express,sql,jest",
        "interest": "tech,scifi,energy", 
    }
] 

describe("DEVELOPERS MODEL", () => {

    describe('getAllDevs()', () => {
        
        beforeEach(async () => {
            return await db('developers').truncate();
        });

        it('should return an array', async () => {
            const devs = await Developers.getAllDevs();

            expect(Array.isArray(devs)).toBe(true);
        });

        it('should return an array with all the developers', async () => {
            await db('developers').insert(developers[0]);
            await db('developers').insert(developers[1]);
            
            const devs = await Developers.getAllDevs();

            expect(devs.length).toBe(2);
        });
    });

    describe('getDev()', () => {
        
        beforeEach(async () => {
            return await db('developers').truncate();
        });

        it('should return an array', async () => {
            const dev = await Developers.getDev(1);

            expect(Array.isArray(dev)).toBe(true);
        });

        it('should return an array with a single developer', async () => {
            await db('developers').insert(developers[0]);
            await db('developers').insert(developers[1]);
            
            const dev = await Developers.getDev(1);

            expect(dev.length).toBe(1);
        });

        it('should return the developer that corresponds with passed ID', async () => {
            await db('developers').insert(developers[0]);
            await db('developers').insert(developers[1]);
            
            const dev = await Developers.getDev(2);

            expect(dev[0].id).toBe(2);
            expect(dev[0].first_name).toBe("Rob");
        });
    });

    describe("addDev()", () => {
        beforeEach(async () => {
            return await db('developers').truncate();
        });

        it('should add a developer to the database', async () => {
            const added = await Developers.addDev(developers[0]);

            const newDev = { 
                ...developers[0], 
                id: 1, 
                rate: 25, 
                available: 1 
            }            

            expect(added[0]).toEqual(newDev);
        });

        it('should return the added developer', async () => {
            const added = await Developers.addDev(developers[0]);      

            expect(added[0].id).toBe(1);
            expect(added[0].first_name).toBe("Bob");
        });
    });

    describe('editDev()', () => {
        beforeEach(async () => {
            return await db('developers').truncate();
        });

        it('should update the changed developer fields', async () => {
            const [ id ] = await db('developers').insert(developers[0]);
            const update = { ...developers[0], id: 1, available: false, rate: 25 }

            const changedInfo = await Developers.editDev(id, update);

            expect(changedInfo[0].available).toBe(0);
        });

        it('should return the updated developer', async () => {
            const [ id ] = await db('developers').insert(developers[0]);
            const update = { ...developers[0], id: 1, available: false, rate: 25 }

            const changedInfo = await Developers.editDev(id, update);

            expect(changedInfo[0].id).toBe(1);
        });
    });

    describe('deleteDev()', () => {
        beforeEach(async () => {
            return await db('developers').truncate();
        });

        it('should remove a developer from the database', async () => {
            await db('developers').insert(developers[0]);
            await db('developers').insert(developers[1]);

            await Developers.deleteDev(1);

            const results = await db('developers');

            expect(results.length).toBe(1);
        });

        it('should remove the developer that corresponds with passed ID', async () => {
            await db('developers').insert(developers[0]);
            await db('developers').insert(developers[1]);

            await Developers.deleteDev(1);

            const results = await db('developers');
            const success = await db('developers').where({ id: 1 });

            expect(results[0].id).toBe(2);
            expect(success.length).toBe(0);
        });
    });
});