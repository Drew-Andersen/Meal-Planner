const db = require('../config/connection');
const models = require('../models');

module.exports = async (modelName, collectionName) => {
    try {
        const collections = await db.db.listCollections({ name: collectionName }).toArray();

        if (collections.length > 0) {
            await db.db.dropCollection(collectionName);
            console.log(`Collection ${collectionName} dropped.`);
        } else {
            console.log(`Collection ${collectionName} does not exist.`);
        }
    } catch (err) {
        console.error(err);
    }
}