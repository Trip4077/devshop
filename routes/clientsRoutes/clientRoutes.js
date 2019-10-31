const router = require('express').Router();
const Clients = require('../../data/models/clients/clientsModel');

router.get('/', async (req, res) => {

    await Clients.getAllClients()
                 .then(clients => {
                    res.status(200).json(clients);
                 })
                 .catch(err => {
                     console.log(err)
                 });

});

router.get('/:id', async (req, res) => {
    //Ensure ID was passed to route
    if( !req.params.id ) res.status(400).json({ err: "Missing ID" });

    await Clients.getClient(req.params.id)
                    .then(client => {
                        //Check if developer ID exists in database
                        if( !client.length ) res.status(400).json({ err: "Invalid ID" }); 
                        
                        res.status(200).json(client[0]);
                    })
                    .catch(err => {
                        console.log(err);
                    });
})

router.put('/:id', async (req, res) => {

    //Check for Dev ID and Change to Be Made
    if( !req.params.id || !Object.keys(req.body).length ) res.status(400).json({ err: "Missing ID or Update Value" });

    await Clients.editClient(req.params.id, req.body)
                    .then(edit => {
                        //Check if developer ID exists in database
                        if( !edit.length ) res.status(400).json({ err: "Invalid ID" }); 
                        
                        res.status(200).json(edit[0]);
                    })
                    .catch(err => {
                        console.log(err);
                    }) 
});

router.delete('/:id', async (req, res) => {
    //Ensure ID was passed to route
    if( !req.params.id ) res.status(400).json({ err: "Missing ID" });

    await Clients.deleteClient(req.params.id)
                    .then(delClientID => {
                        if( !delClientID ) res.status(400).json({ err: 'Invalid ID' });

                        res.status(200).json({ success: `Client has been removed`});
                    })
                    .catch(err => {
                        console.log(err);
                    });
});


module.exports = router;