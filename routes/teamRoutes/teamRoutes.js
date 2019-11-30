const router = require('express').Router();
const Teams = require('../../data/models/teams/teams');


router.get('/', async (req, res) => {
    await Teams.getAllTeams()
               .then(teams => {
                   res.status(200).json(teams);
               })
               .catch(err => {
                   console.log(err);
               });
});

router.get('/:id', async (req, res) => {
    if( !Number.isNaN(Number(req.params.id)) ) {

        await Teams.getTeam(req.params.id)
                    .then(team => {

                        if( !team.length ) res.status(400).json({ err: "Invalid ID" });
                        
                        res.status(200).json(team);

                    })
                    .catch(err => {
                    console.log(err);
                    });
    } else {
        res.status(400).json({ err: "No ID" });
    };
});

router.post('/', async (req, res) => {
    if( !Object.keys(req.body).length ) res.status(400).json({ err: "Missing Team To Add" });

    await Teams.addTeam(req.body)
                  .then(added => {
                      res.status(201).json(added);
                  })
                  .catch(err => {
                      console.log(err);
                  });
});

router.put('/:id', async (req, res) => {
    if( !req.params.id || !Object.keys(req.body).length ) res.status(400).json({ err: "Missing ID or Update Value" });

    await Teams.editTeam(req.params.id, req.body)
                    .then(edit => {
                        //Check if project ID exists in database
                        if( !edit.length ) res.status(400).json({ err: "Invalid ID" });

                        res.status(200).json(edit[0]);
                    })
                    .catch(err => {
                        console.log(err);
                    });
});

router.delete('/:id', async (req, res) => {
    //Ensure ID was passed to route
    if( !req.params.id ) res.status(400).json({ err: "Missing ID" });

    await Teams.deleteTeam(req.params.id)
                    .then(teamID => {
                        if( !teamID ) res.status(400).json({ err: 'Invalid ID' });

                        res.status(200).json({ success: `Team has been removed`});
                    })
                    .catch(err => {
                        console.log(err);
                    });
});

module.exports = router;