const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');
        await User.create(userSeeds);

        console.log(`Finished cleaning and seeding the DB.`);
        process.exit(0);
    } catch (err){
        console.log(err);
    }
})