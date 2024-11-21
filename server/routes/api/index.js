const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);

module.exports = router;