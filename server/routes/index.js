const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use('/api', apiRoutes);

//serve up the react front-end in production
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client,index.html'));
});

nodule.exports = router;