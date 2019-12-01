const router = require('express').Router();
const authenticate = require('../../middleware/authenticate');

const Developers = require('../../data/models/developers/developersModel');

router.get('/', authenticate, async (req, res) => {
    await Developers.getAllDevs()
                    .then(devs => {
                        res.status(200).json(devs);
                    })
                    .catch(err => {
                        console.log(err);
                    });
});

router.get('/:id', authenticate, async (req, res) => {
    //Ensure ID was passed to route
    if( !req.params.id ) res.status(400).json({ err: "Missing ID" });

    await Developers.getDev(req.params.id)
                    .then(dev => {
                        //Check if developer ID exists in database
                        if( !dev.length ) res.status(400).json({ err: "Invalid ID" }); 
                        
                        res.status(200).json(dev[0]);
                    })
                    .catch(err => {
                        console.log(err);
                    });
});

router.put('/:id', authenticate, async (req, res) => {

    //Check for Dev ID and Change to Be Made
    if( !req.params.id || !Object.keys(req.body).length ) res.status(400).json({ err: "Missing ID or Update Value" });

    await Developers.editDev(req.params.id, req.body)
                    .then(edit => {
                        //Check if developer ID exists in database
                        if( !edit.length ) res.status(400).json({ err: "Invalid ID" }); 
                        
                        res.status(200).json(edit[0]);
                    })
                    .catch(err => {
                        console.log(err);
                    }) 
});

router.delete('/:id', authenticate, async (req, res) => {
    //Ensure ID was passed to route
    if( !req.params.id ) res.status(400).json({ err: "Missing ID" });

    await Developers.deleteDev(req.params.id)
                    .then(delDevID => {
                        if( !delDevID ) res.status(400).json({ err: 'Invalid ID' });

                        res.status(200).json({ success: `Developer has been removed`});
                    })
                    .catch(err => {
                        console.log(err);
                    });
});

module.exports = router;