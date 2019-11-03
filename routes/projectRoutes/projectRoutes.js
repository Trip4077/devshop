const router = require('express').Router();
const Projects = require('../../data/models/projects/projectsModel');

router.get('/', async (req, res) => {

    await Projects.getAllProjects()
                  .then(projects => {
                      res.status(200).json(projects);
                  })
                  .catch(err => {
                      console.log(err);
                  });

});

router.get('/:id', async (req, res) => {
    //Ensure ID was passed to route
    if( !req.params.id ) res.status(400).json({ err: "Missing ID" });

    await Projects.getProject(req.params.id)
                  .then(project => {
                      if( !project.length ) res.status(400).json({ err: "Invalid ID" });

                      res.status(200).json(project[0]);
                  })
                  .catch(err => {
                      console.log(err);
                  })
});

router.post('/', async (req, res) => {
    //Ensure ID and Project was passed
    if( !Object.keys(req.body).length ) res.status(400).json({ err: "Missing Project To Add" });

    await Projects.addProject(req.body)
                  .then(added => {
                      res.status(201).json(added);
                  })
                  .catch(err => {
                      console.log(err);
                  });
});

router.put('/:id', async (req, res) => {
    //Ensure ID and Update was passed
    if( !req.params.id || !Object.keys(req.body).length ) res.status(400).json({ err: "Missing ID or Update Value" });

    await Projects.editProject(req.params.id, req.body)
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

    await Projects.deleteProject(req.params.id)
                    .then(delProjectID => {
                        if( !delProjectID ) res.status(400).json({ err: 'Invalid ID' });

                        res.status(200).json({ success: `Client has been removed`});
                    })
                    .catch(err => {
                        console.log(err);
                    });
});

module.exports = router;