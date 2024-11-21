const db = require('../config/connection');
const { User, Food } = require('../models');
const foodSeeds = require('./foodSeeds.json');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');
        await User.create(userSeeds);

        await cleanDB('Food', 'foods');
        await Food.create(foodSeeds);

        console.log(`Finished cleaning and seeding the DB.`);
        process.exit(0);
    } catch (err){
        console.log(err);
    }
})