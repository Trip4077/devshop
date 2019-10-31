const router = require('express').Router();

//Import Routes
const developerRoutes = require('./developerRoutes/developerRoutes');
const devRegisterRoutes = require('./register/registerDev');

const clientRoutes = require('./clientsRoutes/clientRoutes');

//Connect Routes
router.use('/devs', devRegisterRoutes)

router.use('/devs', developerRoutes);
router.use('/clients', clientRoutes);

module.exports = router;