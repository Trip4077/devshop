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
        });

        it('should return an array with all the projects', async () => {
            await db('projects').insert(mockProjects[0]);
            await db('projects').insert(mockProjects[1]);
            
            const projects = await Projects.getAllProjects();

            expect(projects.length).toBe(2);
        });
    });

    describe("getProject()", () => {

        beforeEach(async () => {
            return await db('projects').truncate();
        });

        it('should return an array', async () => {
            const project = await Projects.getProject(1);

            expect(Array.isArray(project)).toBe(true);
        });

        it('should return a single project', async () => {
            await db('projects').insert(mockProjects[0]);
            await db('projects').insert(mockProjects[1]);

            const project = await Projects.getProject(2);

            expect(project.length).toBe(1);
        });

        it('should return the project with the corresponding ID', async () => {
            await db('projects').insert(mockProjects[0]);
            await db('projects').insert(mockProjects[1]);

            const project = await Projects.getProject(2);

            expect(project[0].id).toBe(2);
        });
    });

    describe('addProject()', () => {
        
        beforeEach(async () => {
            return await db('projects').truncate();
        });

        it('should add a project to the database', async () => {
            const added = await Projects.addProject(mockProjects[0]);

            const newProject = { ...mockProjects[0], id: 1 }

            expect(added[0]).toEqual(newProject);
        });

        it('should return the added project', async () => {
            const added = await Projects.addProject(mockProjects[0]);

            expect(added[0].id).toBe(1);
            expect(added[0].title).toBe("Awesome Andriod App");
        });
    });

    describe('edditProject()', () => {
        beforeEach(async () => {
            return await db('projects').truncate();
        });

        it('should update the changed project fields', async () => {
            const [ id ] = await db('projects').insert(mockProjects[0]);
            const update = { ...mockProjects[0], title: "Awesome iOS App" }

            const changedInfo = await Projects.editProject(id, update);

            expect(changedInfo[0].title).toBe("Awesome iOS App");
        });

        it('should return the changed project', async () => {
            const [ id ] = await db('projects').insert(mockProjects[0]);
            const update = { ...mockProjects[0], title: "Awesome iOS App" }

            const changedInfo = await Projects.editProject(id, update);

            expect(changedInfo[0].id).toBe(1);
        });
    });

    describe('deleteProject()', () => {
        beforeEach(async () => {
            return await db('projects').truncate();
        });

        it('should remove a project from the database', async () => {
            await db('projects').insert(mockProjects[0]);
            await db('projects').insert(mockProjects[1]);

            await Projects.deleteProject(1);

            const results = await db('projects');

            expect(results.length).toBe(1);
        });
    });
});