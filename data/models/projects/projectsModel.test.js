const db = require('../../dbConfig');
const Projects = require('./projectsModel');

const mockProjects = [
    {
        "title": "Awesome Andriod App",
        "budget": "$3,000.00",
        "deadline": "11/11/2019",
        "type": "Andriod",
        "description": "It some things for users"  
    },
    {
        "title": "Awesome Web App",
        "budget": "$5,000.00",
        "deadline": "11/11/2021",
        "type": "Web",
        "description": "It some things for users too"  
    }
]

describe('PROJECTS MODEL', () => {

    describe('getAllProjects()', () => {

        beforeEach(async () => {
            return await db('projects').truncate();
        });

        it('should return an array', async () => {
            const projects = await Projects.getAllProjects();

            expect(Array.isArray(projects)).toBe(true);
        })
    });

});