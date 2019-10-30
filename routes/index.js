const router = require('express').Router();

//Import Routes
const developerRoutes = require('./developerRoutes/developerRoutes');

//Connect Routes
router.use('/devs', developerRoutes);

module.exports = router;