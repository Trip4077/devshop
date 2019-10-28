const db = require('../dbConfig');
const Developers = require('./developersModel');

describe("DEVELOPERS MODEL", () => {

    describe('getAllDevs()', () => {
        
        beforeEach(async () => {
            return await db('developers').truncate();
        });

        it('should return an array', async () => {
            const devs = await Developers.getAllDevs();

            expect(Array.isArray(devs)).toBe(true);
        });
    });
});