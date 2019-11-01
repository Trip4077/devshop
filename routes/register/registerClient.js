require('dotenv').config();

const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Clients = require('../../data/models/clients/clientsModel');

const { genToken } = require('./registerHelpers');

router.post('/register', async (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    await Clients.addClient(user)
                 .then(user => {
                     res.status(201).json(user[0]);
                 })
                 .catch(err => {
                    if( err.errno === 19 ) {res.status(400).json({ err: "Email Already Exists" });}
                    else { res.status(400).json(err); } 
                 });
});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    await Clients.getClientByEmail(email)
                 .then(client => {
                    if(client && bcrypt.compareSync(password, client[0].password)) {
                        const token = genToken(client[0]);

                        res.status(200).json({
                            message: `Welcome ${client[0].first_name}`,
                            token,
                            client: client[0]
                        });
                    } else {
                        res.status(401).json({ err: "Invalid Credentials" });
                    }
                 })
                 .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        message: "Could Not Log In",
                        err
                    });
                });
});

module.exports = router;