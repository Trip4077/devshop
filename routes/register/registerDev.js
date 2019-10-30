require('dotenv').config();

const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Developers = require('../../data/models/developers/developersModel');

const { genToken } = require('./registerHelpers');

router.post('/register', async (req, res) => {

    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    await Developers.addDev(user)
                    .then(user => {
                        res.status(201).json(user[0])
                    })
                    .catch(err => {
                        if( err.errno === 19 ) {res.status(400).json({ err: "Email Already Exists" });}
                        else { res.status(400).json(err); } 
                    });
});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    await Developers.getDevByEmail(email)
                    .then(user => {
                        if(user && bcrypt.compareSync(password, user[0].password)) {
                            const token = genToken(user[0]);

                            res.status(200).json({
                                message: `Welcome ${user[0].first_name}`,
                                token,
                                user: user[0]
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