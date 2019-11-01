const router = require('express').Router();

//Import Routes
const developerRoutes = require('./developerRoutes/developerRoutes');
const devRegisterRoutes = require('./register/registerDev');

const clientRoutes = require('./clientsRoutes/clientRoutes');
const clientRegisterRoutes = require('./register/registerClient');

//Connect Routes
router.use('/devs', devRegisterRoutes)
router.use('/clients', clientRegisterRoutes);

router.use('/devs', developerRoutes);
router.use('/clients', clientRoutes);

module.exports = router;