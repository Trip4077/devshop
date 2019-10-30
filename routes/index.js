const router = require('express').Router();

//Import Routes
const developerRoutes = require('./developerRoutes/developerRoutes');
const devRegisterRoutes = require('./register/registerDev');

//Connect Routes
router.use('/devs', devRegisterRoutes)

router.use('/devs', developerRoutes);

module.exports = router;