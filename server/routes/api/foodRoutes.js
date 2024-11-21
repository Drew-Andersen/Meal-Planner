const router = require('express').Router();
const {
    getFoods, // works -- checked on Insomnia
    createFood, // works -- checked on Insomnia
    getSingleFood, // works -- checked on Insomnia
    removeFood, // works -- checked on Insomnia
} = require('../../controllers/foodController');

router.route('/').get(getFoods).post(createFood);
router.route('/:foodId').get(getSingleFood).delete(removeFood);

module.exports = router;