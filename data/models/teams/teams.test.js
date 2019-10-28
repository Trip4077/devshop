const db = require('../../dbConfig');
const Teams = require('./teams');

describe('TEAMS MODEL', () => {

    describe('getAllTeams()', () => {

        it('should return an array', async () => {
            const teams = await Teams.getAllTeams();

            expect(Array.isArray(teams)).toBe(true);
        });

        it('should return all teams in the database', async () => {
            const teams = await Teams.getAllTeams();

            expect(teams.length).toBe(4);
        });
    });

    describe('getTeam()', () => {

        it('should return a single team', async () => {
            const team = await Teams.getTeam(1);

            expect(team.length).toBe(1);
        });

        it('should return the selected team', async () => {
            const team = await Teams.getTeam(2);

            expect(team[0].id).toBe(2);
            expect(team[0].frontend).toBe('Mike');
        });

    });
});