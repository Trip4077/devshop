const router = require('express').Router();
const Developers = require('../../data/models/developers/developersModel');

router.get('/', async (req, res) => {
    await Developers.getAllDevs()
                    .then(devs => {
                        res.status(200).json(devs);
                    })
                    .catch(err => {
                        console.log(err)
                    });
});

router.get('/:id', async (req, res) => {
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

module.exports = router;